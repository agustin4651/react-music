import { ShuflleIcon, SkipPreviousIcon, PlayCircleIcon, SkipNextIcon, RepeatIcon, PauseCircleIcon } from '../icons';
import { useStore } from '../store';
import { PlaybackTimeBar } from './PlaybackTimeBar';

export const AudioControls = () => {
    const isPlay = useStore(state => state.isPlay);
    const toggleIsPlay = useStore(state => state.toggleIsPlay);
    const isRepeat = useStore(state => state.isRepeat);
    const toggleISRepeat = useStore(state => state.toggleIsRepeat)

    return (
        <div className='flex flex-col w-full'>
            <div className='flex justify-center items-center py-2 gap-2'>
                <ShuflleIcon className='text-white hover:text-slate-300 cursor-pointer' size={30} />
                <SkipPreviousIcon className='text-white hover:text-slate-300 cursor-pointer' size={40} />
                {!isPlay
                    ? <PlayCircleIcon
                        className='text-white hover:text-slate-300 cursor-pointer'
                        size={45} onClick={toggleIsPlay}
                    />
                    : <PauseCircleIcon
                        className='text-white hover:text-slate-300 cursor-pointer'
                        size={45} onClick={toggleIsPlay}
                    />}
                <SkipNextIcon className='text-white hover:text-slate-300 cursor-pointer' size={40} />
                <RepeatIcon
                    size={30} onClick={toggleISRepeat}
                    className={`${isRepeat
                        ? 'text-green-500 hover:text-green-800'
                        : 'text-white hover:text-slate-300'} cursor-pointer`}
                />
            </div>
            <PlaybackTimeBar />
        </div>
    )
}
