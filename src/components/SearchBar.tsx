import { SearchIcon } from '../icons';

export const SearchBar = () => {
    return (
        <div className='flex justify-center items-center w-fit p-2 rounded-full bg-white'>
            <SearchIcon className='text-slate-900' size={24} />
            <input
                className='w-60 placeholder:text-slate-900 text-lg bg-transparent outline-none'
                type='search' placeholder='Buscar...'
            />
        </div>
    )
}
