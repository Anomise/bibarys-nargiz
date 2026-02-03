import { useCallback, useMemo } from 'react';
import { Background } from './Background';
import { Character } from './Character';
import { DialogBox } from './DialogBox';
import { GameUI } from './GameUI';
import { scenes } from '@/data/scenes';
import { GameState, Choice } from '@/types/game';

interface GameScreenProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  onEnding: (ending: string) => void;
  onSave: () => void;
  onLoad: () => void;
  onMenu: () => void;
  platform: 'mobile' | 'desktop';
}

export function GameScreen({ 
  gameState, 
  setGameState, 
  onEnding,
  onSave,
  onLoad,
  onMenu,
  platform 
}: GameScreenProps) {
  const currentScene = scenes[gameState.currentScene];
  const currentDialog = currentScene?.dialogs[gameState.currentDialog];
  const isLastDialog = gameState.currentDialog >= (currentScene?.dialogs.length || 0) - 1;

  const activeCharacters = useMemo(() => {
    const chars = new Set<string>();
    currentScene?.dialogs.forEach(d => {
      if (d.character && d.character !== 'Ариф') chars.add(d.character);
    });
    return Array.from(chars);
  }, [currentScene]);

  const handleNext = useCallback(() => {
    if (!currentScene) return;

    if (gameState.currentDialog < currentScene.dialogs.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentDialog: prev.currentDialog + 1
      }));
    } else if (currentScene.ending) {
      onEnding(currentScene.ending);
    } else if (currentScene.nextScene && !currentScene.choices) {
      setGameState(prev => ({
        ...prev,
        currentScene: currentScene.nextScene!,
        currentDialog: 0,
        history: [...prev.history, prev.currentScene]
      }));
    }
  }, [currentScene, gameState.currentDialog, setGameState, onEnding]);

  const handleChoice = useCallback((choice: Choice) => {
    setGameState(prev => {
      const newAffection = { ...prev.affection };
      if (choice.affection && choice.affection.character === 'nargiz') {
        newAffection.nargiz = Math.min(100, Math.max(0, newAffection.nargiz + choice.affection.value));
      }
      return {
        ...prev,
        currentScene: choice.nextScene,
        currentDialog: 0,
        affection: newAffection,
        history: [...prev.history, prev.currentScene]
      };
    });
  }, [setGameState]);

  if (!currentScene || !currentDialog) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Загрузка...</div>;
  }

  return (
    <div className="relative min-h-screen overflow-hidden select-none">
      {/* Background */}
      <Background scene={currentScene.background} />

      {/* Characters */}
      {activeCharacters.includes('Бибарыс') && (
        <Character
          name="Бибарыс"
          emotion={currentDialog.character === 'Бибарыс' ? currentDialog.emotion : 'neutral'}
          position="left"
          isActive={currentDialog.character === 'Бибарыс'}
        />
      )}
      {activeCharacters.includes('Наргиз') && (
        <Character
          name="Наргиз"
          emotion={currentDialog.character === 'Наргиз' ? currentDialog.emotion : 'neutral'}
          position="right"
          isActive={currentDialog.character === 'Наргиз'}
        />
      )}

      {/* Game UI */}
      <GameUI
        gameState={gameState}
        onSave={onSave}
        onLoad={onLoad}
        onMenu={onMenu}
      />

      {/* Dialog Box */}
      <DialogBox
        dialog={currentDialog}
        choices={isLastDialog ? currentScene.choices : undefined}
        onNext={handleNext}
        onChoice={handleChoice}
        isLastDialog={isLastDialog}
        platform={platform}
      />
    </div>
  );
}
