export interface Choice {
  text: string;
  nextScene: string;
  affection?: { character: string; value: number };
}

export interface DialogLine {
  character: string | null;
  text: string;
  emotion?: string;
}

export interface Scene {
  id: string;
  background: string;
  dialogs: DialogLine[];
  choices?: Choice[];
  nextScene?: string;
  ending?: string;
}

export interface GameState {
  currentScene: string;
  currentDialog: number;
  affection: {
    nargiz: number;
  };
  history: string[];
}
