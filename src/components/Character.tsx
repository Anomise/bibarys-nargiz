import { cn } from '@/utils/cn';

interface CharacterProps {
  name: string;
  emotion?: string;
  position: 'left' | 'right' | 'center';
  isActive: boolean;
}

const characterStyles: Record<string, { gradient: string; accent: string; emoji: string }> = {
  'Бибарыс': {
    gradient: 'from-cyan-400 via-blue-400 to-indigo-400',
    accent: 'text-cyan-400',
    emoji: '👨‍💻'
  },
  'Наргиз': {
    gradient: 'from-pink-400 via-rose-400 to-purple-400',
    accent: 'text-rose-400',
    emoji: '👩‍⚕️'
  },
  'Ариф': {
    gradient: 'from-green-400 via-emerald-400 to-teal-400',
    accent: 'text-green-400',
    emoji: '🧑‍🎓'
  }
};

const emotionEmojis: Record<string, Record<string, string>> = {
  'Бибарыс': {
    happy: '😊',
    excited: '🤩',
    sad: '😢',
    angry: '😠',
    nervous: '😅',
    blush: '😳',
    curious: '🤔',
    neutral: '👨‍💻'
  },
  'Наргиз': {
    happy: '😊',
    excited: '🤩',
    sad: '😢',
    angry: '😠',
    nervous: '😅',
    blush: '🥰',
    curious: '🤔',
    neutral: '👩‍⚕️'
  },
  'Ариф': {
    happy: '😄',
    excited: '🤩',
    curious: '🤔',
    neutral: '🧑‍🎓'
  }
};

export function Character({ name, emotion = 'neutral', position, isActive }: CharacterProps) {
  const style = characterStyles[name] || { gradient: 'from-gray-400 to-gray-500', accent: 'text-gray-400', emoji: '👤' };
  const emojis = emotionEmojis[name] || { neutral: '👤' };
  
  const positionClasses = {
    left: 'left-[5%] sm:left-[10%]',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-[5%] sm:right-[10%]'
  };

  return (
    <div
      className={cn(
        'absolute bottom-36 sm:bottom-40 transition-all duration-500',
        positionClasses[position],
        isActive ? 'scale-100 sm:scale-105 opacity-100' : 'scale-90 sm:scale-95 opacity-50'
      )}
    >
      {/* Character Avatar */}
      <div className="relative">
        {/* Glow effect */}
        <div
          className={cn(
            'absolute inset-0 rounded-full blur-xl sm:blur-2xl opacity-50 bg-gradient-to-br',
            style.gradient
          )}
        />
        
        {/* Avatar circle */}
        <div
          className={cn(
            'relative w-20 h-20 sm:w-32 md:w-40 sm:h-32 md:h-40 rounded-full bg-gradient-to-br p-0.5 sm:p-1',
            style.gradient
          )}
        >
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-3xl sm:text-5xl md:text-6xl">{emojis[emotion] || emojis.neutral}</span>
          </div>
        </div>

        {/* Name tag */}
        <div
          className={cn(
            'absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 sm:px-4 py-0.5 sm:py-1 rounded-full',
            'bg-slate-900/80 backdrop-blur-sm border border-slate-700'
          )}
        >
          <span className={cn('text-xs sm:text-sm font-bold', style.accent)}>{name}</span>
        </div>
      </div>
    </div>
  );
}
