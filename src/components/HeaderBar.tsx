import { MenuIcon } from '../icons';
import { SearchBar } from './SearchBar';

export const HeaderBar = () => {
    return (
        <header className='flex bg-slate-800 p-4 justify-center items-center'>
            <h1 className='text-xl text-white font-bold antialiased uppercase'>React Music</h1>
            <div className='flex-1' />
            <SearchBar />
            <MenuIcon className='px-4 text-white hover:text-slate-300 cursor-pointer' />
        </header>
    )
}
