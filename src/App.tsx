import { useState, useEffect, useCallback } from 'react';
import { PlatformSelect } from './components/PlatformSelect';
import { MainMenu } from './components/MainMenu';
import { GameScreen } from './components/GameScreen';
import { EndingScreen } from './components/EndingScreen';
import { GameState } from './types/game';

type Screen = 'platform' | 'menu' | 'game' | 'ending';
type Platform = 'mobile' | 'desktop';

const SAVE_KEY = 'visual_novel_save';

const initialGameState: GameState = {
  currentScene: 'intro',
  currentDialog: 0,
  affection: {
    nargiz: 50
  },
  history: []
};

const PLATFORM_KEY = 'visual_novel_platform';

export function App() {
  const [screen, setScreen] = useState<Screen>('platform');
  const [platform, setPlatform] = useState<Platform>('desktop');
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [ending, setEnding] = useState<string>('');
  const [hasSave, setHasSave] = useState(false);

  // Check for saved platform on mount
  useEffect(() => {
    const savedPlatform = localStorage.getItem(PLATFORM_KEY) as Platform | null;
    if (savedPlatform) {
      setPlatform(savedPlatform);
      setScreen('menu');
    }
  }, []);

  // Check for saved game on mount
  useEffect(() => {
    const saved = localStorage.getItem(SAVE_KEY);
    setHasSave(!!saved);
  }, []);

  const handleStart = useCallback(() => {
    setGameState(initialGameState);
    setScreen('game');
  }, []);

  const handleLoad = useCallback(() => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setGameState(parsed);
        setScreen('game');
      } catch (e) {
        console.error('Failed to load save');
      }
    }
  }, []);

  const handleSave = useCallback(() => {
    localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
    setHasSave(true);
    // Show save notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-pulse';
    notification.textContent = '✓ Игра сохранена!';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  }, [gameState]);

  const handleEnding = useCallback((endingText: string) => {
    setEnding(endingText);
    setScreen('ending');
  }, []);

  const handleMenu = useCallback(() => {
    setScreen('menu');
  }, []);

  const handlePlatformSelect = useCallback((selectedPlatform: Platform) => {
    setPlatform(selectedPlatform);
    localStorage.setItem(PLATFORM_KEY, selectedPlatform);
    setScreen('menu');
  }, []);

  const handleRestart = useCallback(() => {
    setGameState(initialGameState);
    setScreen('game');
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {screen === 'platform' && (
        <PlatformSelect onSelect={handlePlatformSelect} />
      )}

      {screen === 'menu' && (
        <MainMenu
          onStart={handleStart}
          onLoad={handleLoad}
          hasSave={hasSave}
        />
      )}
      
      {screen === 'game' && (
        <GameScreen
          gameState={gameState}
          setGameState={setGameState}
          onEnding={handleEnding}
          onSave={handleSave}
          onLoad={handleLoad}
          onMenu={handleMenu}
          platform={platform}
        />
      )}
      
      {screen === 'ending' && (
        <EndingScreen
          ending={ending}
          gameState={gameState}
          onRestart={handleRestart}
          onMenu={handleMenu}
        />
      )}
    </div>
  );
}
