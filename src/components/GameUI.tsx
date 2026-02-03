import { useState } from 'react';
import { cn } from '@/utils/cn';
import { GameState } from '@/types/game';

interface GameUIProps {
  gameState: GameState;
  onSave: () => void;
  onLoad: () => void;
  onMenu: () => void;
}

export function GameUI({ gameState, onSave, onLoad, onMenu }: GameUIProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 p-2 sm:p-4 flex justify-between items-center z-20">
        {/* Affection meter - Nargiz */}
        <div className="flex items-center gap-1 sm:gap-2 bg-slate-900/80 backdrop-blur-sm rounded-full px-2 sm:px-4 py-1 sm:py-2">
          <span className="text-rose-400 text-sm sm:text-base">💗</span>
          <span className="text-rose-400 font-bold text-xs sm:text-sm hidden xs:inline">Наргиз</span>
          <div className="w-12 sm:w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, gameState.affection.nargiz))}%` }}
            />
          </div>
          <span className="text-white text-xs">{gameState.affection.nargiz}%</span>
        </div>

        {/* Menu button (mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              'p-2 rounded-lg bg-slate-900/80 backdrop-blur-sm',
              'border border-slate-700 text-white text-xl'
            )}
          >
            ☰
          </button>
        </div>

        {/* Desktop menu buttons */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={onSave}
            className={cn(
              'px-3 py-2 rounded-lg bg-slate-900/80 backdrop-blur-sm',
              'border border-slate-700 text-white text-sm',
              'hover:border-green-500 hover:text-green-400 transition-colors'
            )}
          >
            💾
          </button>
          <button
            onClick={onLoad}
            className={cn(
              'px-3 py-2 rounded-lg bg-slate-900/80 backdrop-blur-sm',
              'border border-slate-700 text-white text-sm',
              'hover:border-blue-500 hover:text-blue-400 transition-colors'
            )}
          >
            📂
          </button>
          <button
            onClick={onMenu}
            className={cn(
              'px-3 py-2 rounded-lg bg-slate-900/80 backdrop-blur-sm',
              'border border-slate-700 text-white text-sm',
              'hover:border-red-500 hover:text-red-400 transition-colors'
            )}
          >
            🏠
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-14 right-2 z-30 sm:hidden">
          <div className="bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            <button
              onClick={() => { onSave(); setMenuOpen(false); }}
              className="w-full px-4 py-3 text-white text-left hover:bg-slate-800 flex items-center gap-2"
            >
              💾 Сохранить
            </button>
            <button
              onClick={() => { onLoad(); setMenuOpen(false); }}
              className="w-full px-4 py-3 text-white text-left hover:bg-slate-800 flex items-center gap-2"
            >
              📂 Загрузить
            </button>
            <button
              onClick={() => { onMenu(); setMenuOpen(false); }}
              className="w-full px-4 py-3 text-white text-left hover:bg-slate-800 flex items-center gap-2"
            >
              🏠 Меню
            </button>
          </div>
        </div>
      )}
    </>
  );
}
