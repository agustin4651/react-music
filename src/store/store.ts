import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    title: string;
    setTitle: (title: string) => void;

    isPlay: boolean;
    toggleIsPlay: () => void;

    volume: number;
    setVolume: (value: number) => void;

    isMute: boolean;
    toggleIsMute: () => void;

    isRepeat: boolean;
    toggleIsRepeat: () => void;
}


export const useStore = create<State>()((set) => ({
    title: 'Baby Don´t Hurt Me.opus',
    setTitle: (title: string) => set({ title }),

    isPlay: false,
    toggleIsPlay: () => set(state => ({ isPlay: !state.isPlay })),

    volume: 1,
    setVolume: (value: number) => set({ volume: value }),

    isMute: false,
    toggleIsMute: () => set(state => ({ isMute: !state.isMute })),

    isRepeat: false,
    toggleIsRepeat: () => set(state => ({ isRepeat: !state.isRepeat })),
}));