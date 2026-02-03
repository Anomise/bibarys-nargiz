import { cn } from '@/utils/cn';

interface PlatformSelectProps {
  onSelect: (platform: 'mobile' | 'desktop') => void;
}

export function PlatformSelect({ onSelect }: PlatformSelectProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />
        
        {/* Floating elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-6xl mb-4">🚌</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
            Маршрут 101
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">Визуальная новелла</p>
        </div>

        {/* Platform selection */}
        <h2 className="text-xl sm:text-2xl text-white mb-6">Выберите платформу</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          {/* Mobile button */}
          <button
            onClick={() => onSelect('mobile')}
            className={cn(
              'group relative p-6 sm:p-8 rounded-2xl',
              'bg-gradient-to-br from-cyan-500/20 to-blue-600/20',
              'border-2 border-cyan-500/50',
              'hover:border-cyan-400 hover:from-cyan-500/30 hover:to-blue-600/30',
              'transition-all duration-300',
              'hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20',
              'min-w-[200px]'
            )}
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">📱</div>
            <div className="text-xl font-bold text-white mb-1">Телефон</div>
            <div className="text-sm text-slate-400">Текст по центру экрана</div>
          </button>

          {/* Desktop button */}
          <button
            onClick={() => onSelect('desktop')}
            className={cn(
              'group relative p-6 sm:p-8 rounded-2xl',
              'bg-gradient-to-br from-purple-500/20 to-pink-600/20',
              'border-2 border-purple-500/50',
              'hover:border-purple-400 hover:from-purple-500/30 hover:to-pink-600/30',
              'transition-all duration-300',
              'hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20',
              'min-w-[200px]'
            )}
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🖥️</div>
            <div className="text-xl font-bold text-white mb-1">Компьютер</div>
            <div className="text-sm text-slate-400">Текст внизу экрана</div>
          </button>
        </div>

        {/* Hint */}
        <p className="mt-8 text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
          Выберите устройство, с которого вы играете, для оптимального отображения интерфейса
        </p>
      </div>
    </div>
  );
}
