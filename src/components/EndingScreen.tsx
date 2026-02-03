import { cn } from '@/utils/cn';
import { GameState } from '@/types/game';

interface EndingScreenProps {
  ending: string;
  gameState: GameState;
  onRestart: () => void;
  onMenu: () => void;
}

export function EndingScreen({ ending, gameState, onRestart, onMenu }: EndingScreenProps) {
  const isRomance = ending.includes('Любовь') || ending.includes('💕');
  const isBeginning = ending.includes('прекрасного') || ending.includes('💫');

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br',
        isRomance ? 'from-rose-900 via-pink-900 to-purple-900' : 'from-amber-900 via-orange-900 to-rose-900'
      )}>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl sm:text-3xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {isRomance ? '💕' : '✨'}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Ending banner */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-5xl sm:text-6xl mb-4">
            {isRomance ? '💕' : '💫'}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ~ Конец ~
          </h1>
          <div className={cn(
            'inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-xl',
            'bg-white/10 backdrop-blur-sm border border-white/20'
          )}>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-bold">
              {ending}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-slate-700">
          <h2 className="text-lg sm:text-xl text-white mb-4 text-center">📊 Статистика</h2>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-1">💗</div>
            <p className="text-rose-400 font-bold">Наргиз</p>
            <p className="text-2xl sm:text-3xl text-white">{gameState.affection.nargiz}%</p>
          </div>
        </div>

        {/* Message */}
        <p className="text-white/70 text-center max-w-md mb-6 sm:mb-8 text-sm sm:text-base px-4">
          {isRomance 
            ? 'История любви, которая началась в автобусе 101 между Сатпаевом и Жезказганом. Бибарыс и Наргиз — два сердца, два колледжа, одна судьба.'
            : isBeginning
            ? 'Каждое путешествие начинается с первого шага. Для Бибарыса и Наргиз всё только начинается...'
            : 'Иногда самые красивые истории рождаются в самых обычных местах — например, в автобусе 101.'
          }
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4">
          <button
            onClick={onRestart}
            className={cn(
              'py-3 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-bold',
              'bg-gradient-to-r from-purple-600 to-pink-600',
              'hover:from-purple-500 hover:to-pink-500',
              'text-white shadow-lg shadow-purple-500/30',
              'transition-all duration-300 hover:scale-105',
              'active:scale-95'
            )}
          >
            🔄 Играть снова
          </button>
          <button
            onClick={onMenu}
            className={cn(
              'py-3 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-bold',
              'bg-slate-700 hover:bg-slate-600',
              'text-white shadow-lg',
              'transition-all duration-300 hover:scale-105',
              'active:scale-95'
            )}
          >
            🏠 В меню
          </button>
        </div>

        {/* Achievement hint */}
        <p className="mt-6 sm:mt-8 text-white/40 text-xs sm:text-sm text-center px-4">
          Попробуйте другие варианты, чтобы открыть все концовки!
        </p>
      </div>
    </div>
  );
}
