import { cn } from '@/utils/cn';

interface BackgroundProps {
  scene: string;
}

const backgrounds: Record<string, { gradient: string; elements: string; overlay?: string }> = {
  bus_stop: {
    gradient: 'from-slate-600 via-blue-400 to-cyan-300',
    elements: '🚏❄️🌅',
    overlay: 'bg-gradient-to-t from-slate-900/50 to-transparent'
  },
  bus: {
    gradient: 'from-amber-700 via-orange-600 to-yellow-500',
    elements: '🚌💺🎧',
    overlay: 'bg-gradient-to-b from-amber-900/30 to-amber-900/50'
  },
  steppe: {
    gradient: 'from-amber-300 via-yellow-200 to-sky-300',
    elements: '🌾☀️🏔️',
    overlay: 'bg-gradient-to-t from-amber-900/20 to-transparent'
  },
  jezkazgan: {
    gradient: 'from-slate-500 via-gray-400 to-blue-300',
    elements: '🏙️🏛️🚌',
    overlay: 'bg-gradient-to-t from-slate-900/40 to-transparent'
  },
  polytechnic: {
    gradient: 'from-blue-600 via-indigo-500 to-purple-400',
    elements: '🏫💻📚',
    overlay: 'bg-gradient-to-t from-indigo-900/50 to-transparent'
  },
  satpaev_evening: {
    gradient: 'from-orange-500 via-pink-500 to-purple-600',
    elements: '🌇🏠✨',
    overlay: 'bg-gradient-to-t from-purple-900/50 to-transparent'
  },
  satpaev_park: {
    gradient: 'from-pink-400 via-rose-400 to-orange-300',
    elements: '🌳🌸💕',
    overlay: 'bg-gradient-to-t from-rose-900/30 to-transparent'
  }
};

export function Background({ scene }: BackgroundProps) {
  const bg = backgrounds[scene] || backgrounds.bus_stop;
  const elements = bg.elements.split('');

  return (
    <div className={cn(
      'absolute inset-0 bg-gradient-to-b transition-all duration-1000',
      bg.gradient
    )}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-[10%] left-[10%] text-3xl sm:text-4xl animate-bounce opacity-60">
          {elements[0]}
        </div>
        <div className="absolute top-[15%] right-[15%] text-4xl sm:text-5xl animate-pulse opacity-60">
          {elements[1]}
        </div>
        <div className="absolute top-[30%] left-[25%] text-2xl sm:text-3xl animate-bounce delay-300 opacity-60" style={{ animationDelay: '0.5s' }}>
          {elements[2]}
        </div>
        
        {/* Additional floating elements for atmosphere */}
        {scene === 'bus' && (
          <>
            <div className="absolute top-[40%] right-[10%] text-2xl opacity-30">💺</div>
            <div className="absolute top-[50%] left-[5%] text-2xl opacity-30">💺</div>
            <div className="absolute top-[35%] left-[15%] text-2xl opacity-30">💺</div>
          </>
        )}
        
        {scene === 'steppe' && (
          <>
            <div className="absolute bottom-[30%] left-[20%] text-3xl opacity-40">🌾</div>
            <div className="absolute bottom-[35%] right-[25%] text-2xl opacity-40">🌾</div>
            <div className="absolute bottom-[25%] left-[60%] text-4xl opacity-30">🌾</div>
          </>
        )}

        {scene === 'satpaev_park' && (
          <>
            <div className="absolute top-[20%] left-[30%] text-2xl opacity-50 animate-pulse">💕</div>
            <div className="absolute top-[45%] right-[20%] text-xl opacity-40 animate-bounce">🌸</div>
          </>
        )}
        
        {/* Light rays */}
        <div className="absolute top-0 left-1/4 w-24 sm:w-32 h-[400px] sm:h-[500px] bg-white/10 rotate-12 blur-3xl" />
        <div className="absolute top-0 right-1/3 w-16 sm:w-24 h-[300px] sm:h-[400px] bg-white/10 -rotate-12 blur-3xl" />
        
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Custom overlay */}
      {bg.overlay && <div className={cn('absolute inset-0', bg.overlay)} />}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
