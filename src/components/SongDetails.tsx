import { useEffect } from 'react';

interface Props {
    title: string;
    artists: string[];
    img: string;
}

export const SongDetails = ({ title, artists, img }: Props) => {
    useEffect(() => {
        document.title = `${title} - ${artists.join(', ')}`;
    }, [title]);

    return (
        <div className='flex gap-2'>
            <img src={img} width='60px' alt={title} className='rounded' />
            <div className='flex flex-col justify-center min-w-fit p-2 w-96'>
                <p className='text-xs text-white font-bold'>{title}</p>
                <p className='text-xs text-slate-400'>{artists.join(', ')}</p>
            </div>
        </div>
    )
}
