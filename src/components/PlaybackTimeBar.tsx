import { useEffect, useState } from 'react';
import { useStore } from '../store';
import { formatTime } from '../helpers';

export const PlaybackTimeBar = () => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const title = useStore(state => state.title);
    const isPlay = useStore(state => state.isPlay);
    const toggleIsPlay = useStore(state => state.toggleIsPlay);
    const volume = useStore(state => state.volume);
    const isRepeat = useStore(state => state.isRepeat);
    const isMute = useStore(state => state.isMute);

    useEffect(() => {
        const newAudio = document.createElement('audio');
        newAudio.src = `/music/${title}`;

        newAudio.addEventListener('loadedmetadata', () => {
            setCurrentTime(newAudio.currentTime);
            setDuration(newAudio.duration);
        });

        newAudio.addEventListener('timeupdate', () => {
            setCurrentTime(newAudio.currentTime);
        });

        newAudio.addEventListener('ended', () => {
            if (isRepeat) return;
            setCurrentTime(0);
            toggleIsPlay();
        })

        setAudio(newAudio);

        return () => {
            newAudio.removeEventListener('loadedmetadata', () => { });
            newAudio.removeEventListener('timeupdate', () => { });
            newAudio.removeEventListener('ended', () => { });
            newAudio.pause();
        };
    }, [title]);

    useEffect(() => {
        if (!audio) return;
        if (isPlay) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlay]);

    useEffect(() => {
        if (!audio) return;
        audio.volume = volume;
    }, [volume]);

    useEffect(() => {
        if (!audio) return;
        audio.loop = isRepeat;
    }, [isRepeat]);

    useEffect(() => {
        if (!audio) return;
        audio.muted = isMute;
    }, [isMute]);

    const handleTimeChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        if (audio) {
            audio.currentTime = +value;
        }
    };

    return (
        <div className='flex justify-center items-center w-full gap-2'>
            <span className='text-white text-xs'>{formatTime(currentTime)}</span>
            <input
                className='w-full cursor-pointer h-1 accent-cyan-500'
                type='range'
                min={0}
                max={duration}
                step={.1}
                value={currentTime}
                onChange={handleTimeChange}
            />
            <span className='text-white text-xs'>{formatTime(duration)}</span>
        </div>
    );
};