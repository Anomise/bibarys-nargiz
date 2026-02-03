import { cn } from '@/utils/cn';

interface MainMenuProps {
  onStart: () => void;
  onLoad: () => void;
  hasSave: boolean;
}

export function MainMenu({ onStart, onLoad, hasSave }: MainMenuProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xl sm:text-2xl animate-bounce opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              🚌
            </div>
          ))}
        </div>

        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-4xl sm:text-5xl mb-4">🚌</div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Маршрут 101
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 italic">
            ～ Визуальная Новелла ～
          </p>
          <p className="text-sm sm:text-base text-white/50 mt-2">
            Сатпаев — Жезказган
          </p>
        </div>

        {/* Character avatars */}
        <div className="flex gap-4 sm:gap-8 mb-8 sm:mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl md:text-5xl">👨‍💻</span>
              </div>
            </div>
            <p className="text-center mt-2 text-cyan-400 font-bold text-sm sm:text-base">Бибарыс</p>
            <p className="text-center text-cyan-400/60 text-xs">Политех</p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-rose-400 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl md:text-5xl">👩‍⚕️</span>
              </div>
            </div>
            <p className="text-center mt-2 text-rose-400 font-bold text-sm sm:text-base">Наргиз</p>
            <p className="text-center text-rose-400/60 text-xs">Медколледж</p>
          </div>
        </div>

        {/* Location info */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
            <span>📍</span>
            <span className="text-white/70 text-sm">Казахстан • Улытауская область</span>
          </div>
        </div>

        {/* Menu buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs">
          <button
            onClick={onStart}
            className={cn(
              'w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-lg sm:text-xl font-bold',
              'bg-gradient-to-r from-purple-600 to-pink-600',
              'hover:from-purple-500 hover:to-pink-500',
              'border-2 border-purple-400/50',
              'text-white shadow-lg shadow-purple-500/30',
              'transition-all duration-300 hover:scale-105',
              'active:scale-95'
            )}
          >
            ▶ Новая игра
          </button>
          
          {hasSave && (
            <button
              onClick={onLoad}
              className={cn(
                'w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-lg sm:text-xl font-bold',
                'bg-gradient-to-r from-blue-600 to-cyan-600',
                'hover:from-blue-500 hover:to-cyan-500',
                'border-2 border-blue-400/50',
                'text-white shadow-lg shadow-blue-500/30',
                'transition-all duration-300 hover:scale-105',
                'active:scale-95'
              )}
            >
              📂 Продолжить
            </button>
          )}
        </div>

        {/* Footer */}
        <p className="absolute bottom-4 left-4 right-4 text-white/30 text-xs sm:text-sm text-center">
          Нажмите на экран, чтобы продвигать диалоги • Выбирайте ответы мудро
        </p>
      </div>
    </div>
  );
}
