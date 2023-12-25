import { AudioPlayerFooter, HeaderBar } from './components';

const App = () => {
  return (
    <>
      <HeaderBar />
      <main className='flex flex-1 mx-2 mt-2 mb-1 bg-transparent rounded gap-2'>
        <section className='bg-slate-800 rounded-e w-60'></section>
        <section className='flex flex-1 bg-slate-800 rounded-s'></section>
      </main>
      <AudioPlayerFooter />
    </>
  )
}

export default App
