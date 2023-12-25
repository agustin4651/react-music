import { PlayCircleIcon, RepeatIcon, SearchIcon, ShuflleIcon, SkipNextIcon, SkipPreviousIcon } from './icons';

const App = () => {
  return (
    <>
      <header className='flex bg-slate-800 p-4 justify-center items-center'>
        <h1 className='text-xl text-white font-bold antialiased uppercase'>React Music</h1>
        <div className='flex-1' />
        <div className='flex justify-center items-center w-fit p-2 rounded-full bg-white'>
          <SearchIcon className='text-slate-900' size={24} />
          <input
            className='w-60 placeholder:text-slate-900 text-lg bg-transparent outline-none'
            type='search' placeholder='Buscar...'
          />
        </div>
      </header>

      <main className='flex flex-1 mx-2 mt-2 mb-1 bg-transparent rounded gap-2'>
        <section className='bg-slate-800 rounded-e w-60'></section>
        <section className='flex flex-1 bg-slate-800 rounded-s'></section>
      </main>

      <footer className='flex bg-slate-800 mx-2 mt-1 mb-2 py-4 px-4 rounded h-fit justify-center items-center'>
        <div className='flex flex-col min-w-fit p-4 w-96'>
          <p className='text-xs text-white font-bold'>Baby Don´t Hurt Me</p>
          <p className='text-xs text-white'>David Guetta, Anne-Marie, Coi Leray</p>
        </div>

        <div className='flex flex-col w-full'>
          <div className='flex justify-center items-center py-2 gap-2'>
            <ShuflleIcon className='text-white hover:text-slate-300 cursor-pointer' size={30} />
            <SkipPreviousIcon className='text-white hover:text-slate-300 cursor-pointer' size={40} />
            <PlayCircleIcon
              className='text-white hover:text-slate-300 cursor-pointer'
              size={45} onClick={() => alert('Play')}
            />
            <SkipNextIcon className='text-white hover:text-slate-300 cursor-pointer' size={40} />
            <RepeatIcon className='text-white hover:text-slate-300 cursor-pointer' size={30} />
          </div>
          <div className='flex w-full gap-2'>
            <span className='text-white text-xs'>0:00</span>
            <input className='w-full cursor-pointer h-1 accent-cyan-500' type='range' min={0} max={3000} step={1} />
            <span className='text-white text-xs'>3:10</span>
          </div>
        </div>

        <div className='flex justify-center items-center p-4 w-96'>
          <input className='flex w-[100px] h-1 accent-emerald-500' type='range' min={0} max={1} step={.01} />
        </div>
      </footer>
    </>
  )
}

export default App
