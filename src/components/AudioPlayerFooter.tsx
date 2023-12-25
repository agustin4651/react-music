import { FullscreenIcon, VolumeDownIcon, VolumeMuteIcon, VolumeOffIcon, VolumeUpIcon } from '../icons';
import { useStore } from '../store';
import { AudioControls, SongDetails } from './';

export const AudioPlayerFooter = () => {
    const setVolume = useStore(state => state.setVolume);
    const volume = useStore(state => state.volume);
    const isMute = useStore(state => state.isMute);
    const toggleIsMute = useStore(state => state.toggleIsMute);

    return (
        <footer className='flex bg-slate-800 mx-2 mt-1 mb-2 py-1 px-4 rounded h-fit justify-center items-center'>
            <SongDetails
                title='Baby Don´t Hurt Me'
                artists={['David Guetta', 'Anne-Marie', 'Coi Leray']}
                img='/covers/baby-dont-hurt-me.jpeg'
            />
            <AudioControls />
            <div className='flex justify-between items-center p-4 w-96'>
                <div className='flex justify-center items-center p-4 gap-2'>
                    {isMute
                        ? <VolumeOffIcon size={32} onClick={toggleIsMute}
                            className='text-white hover:text-slate-300 cursor-pointer' />
                        : <StateVolume volume={volume} toggleIsMute={toggleIsMute} />}
                    <input
                        className='flex w-[100px] h-1 accent-emerald-500'
                        type='range' min={0} max={1} step={.01} value={volume}
                        onChange={({ target: { value } }) => setVolume(+value)}
                    />
                </div>
                <FullscreenIcon size={32} className='text-white hover:text-slate-300 cursor-pointer' />
            </div>
        </footer>
    )
}

const StateVolume = ({ volume, toggleIsMute }: { volume: number, toggleIsMute: () => void }) => {
    if (volume >= .51) return (
        <VolumeUpIcon size={32} onClick={toggleIsMute}
            className='text-white hover:text-slate-300 cursor-pointer' />
    )
    if (volume <= .50 && volume >= .01) return (
        <VolumeDownIcon size={32} onClick={toggleIsMute}
            className='text-white hover:text-slate-300 cursor-pointer' />
    )
    return (
        <VolumeMuteIcon size={32} onClick={toggleIsMute}
            className='text-white hover:text-slate-300 cursor-pointer' />
    )
}