import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { DialogLine, Choice } from '@/types/game';

interface DialogBoxProps {
  dialog: DialogLine;
  choices?: Choice[];
  onNext: () => void;
  onChoice: (choice: Choice) => void;
  isLastDialog: boolean;
  platform: 'mobile' | 'desktop';
}

const characterColors: Record<string, string> = {
  'Бибарыс': 'text-cyan-400',
  'Наргиз': 'text-rose-400',
  'Ариф': 'text-green-400',
};

export function DialogBox({ dialog, choices, onNext, onChoice, isLastDialog, platform }: DialogBoxProps) {
  const isMobile = platform === 'mobile';
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    
    let index = 0;
    const text = dialog.text;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [dialog]);

  const handleClick = () => {
    if (isTyping) {
      setDisplayedText(dialog.text);
      setIsTyping(false);
    } else if (!isLastDialog || !choices) {
      onNext();
    }
  };

  const showChoices = isLastDialog && choices && !isTyping;

  return (
    <div className={cn(
      "absolute left-0 right-0 p-2 sm:p-4 md:p-6",
      isMobile ? "top-1/2 -translate-y-1/2 px-4" : "bottom-0"
    )}>
      {/* Dialog container */}
      <div
        onClick={handleClick}
        className={cn(
          'relative bg-slate-900/95 backdrop-blur-md rounded-xl sm:rounded-2xl border border-slate-700',
          'shadow-2xl shadow-black/50 cursor-pointer',
          'transition-all duration-300 hover:border-slate-600',
          isMobile && 'max-w-lg mx-auto'
        )}
      >
        {/* Character name */}
        {dialog.character && (
          <div className="absolute -top-3 sm:-top-4 left-3 sm:left-6">
            <div className={cn(
              'px-2 sm:px-4 py-0.5 sm:py-1 rounded-lg bg-slate-800 border border-slate-600',
              'shadow-lg'
            )}>
              <span className={cn(
                'font-bold text-sm sm:text-lg',
                characterColors[dialog.character] || 'text-white'
              )}>
                {dialog.character}
              </span>
            </div>
          </div>
        )}

        {/* Dialog text */}
        <div className="p-4 pt-6 sm:p-6 sm:pt-8 min-h-[80px] sm:min-h-[120px]">
          <p className={cn(
            'text-base sm:text-lg md:text-xl text-white leading-relaxed',
            !dialog.character && 'italic text-slate-300'
          )}>
            {displayedText}
            {isTyping && <span className="animate-pulse">▌</span>}
          </p>
        </div>

        {/* Continue indicator */}
        {!isTyping && !showChoices && (
          <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 text-slate-500 text-xs sm:text-sm animate-bounce">
            ▼ Нажмите
          </div>
        )}
      </div>

      {/* Choices */}
      {showChoices && (
        <div className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2 max-h-[40vh] overflow-y-auto">
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onChoice(choice);
              }}
              className={cn(
                'w-full p-3 sm:p-4 text-left rounded-lg sm:rounded-xl',
                'bg-gradient-to-r from-slate-800/90 to-slate-700/90',
                'border border-slate-600 backdrop-blur-sm',
                'text-white text-sm sm:text-base md:text-lg',
                'transition-all duration-300',
                'hover:from-purple-900/80 hover:to-pink-900/80',
                'hover:border-purple-500 hover:scale-[1.01] sm:hover:scale-[1.02]',
                'hover:shadow-lg hover:shadow-purple-500/20',
                'active:scale-[0.99]'
              )}
            >
              <span className="text-purple-400 mr-2">▸</span>
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
