import { FastForwardIcon, FastRewindIcon, PlayCircleIcon, SearchIcon } from './icons';

const App = () => {
  return (
    <>
      <header className='flex bg-slate-800 p-8 justify-center items-center'>
        <h1 className='text-3xl text-white font-bold antialiased uppercase'>React Music</h1>
        <div className='flex-1' />
        <div className='flex justify-center items-center w-fit p-2 rounded-full bg-white'>
          <SearchIcon className='text-slate-900' />
          <input
            className='w-80 py-2 px-1 placeholder:text-slate-900 text-2xl bg-transparent outline-none'
            type='search' placeholder='Buscar...'
          />
        </div>
      </header>

      <main className='flex flex-1 mx-2 mt-2 mb-1 bg-transparent rounded gap-2'>
        <section className='bg-slate-800 rounded-e w-96'></section>
        <section className='flex flex-1 bg-slate-800 rounded-s'></section>
      </main>

      <footer className='flex flex-col bg-slate-800 m-2 py-4 px-8 rounded h-32 justify-center items-center'>
        <div className='flex justify-center items-center py-2 gap-2'>
          <FastRewindIcon className='text-white hover:text-slate-300 cursor-pointer' size={60} />
          <PlayCircleIcon
            className='text-white hover:text-slate-300 cursor-pointer'
            size={72} onClick={() => alert('Play')}
          />
          <FastForwardIcon className='text-white hover:text-slate-300 cursor-pointer' size={60} />
        </div>
        <input className='w-full cursor-pointer' type='range' min={0} max={3000} step={1} />
      </footer>
    </>
  )
}

export default App
