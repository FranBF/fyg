import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Introduction } from './pages/Introduction'
import { Madrid } from './pages/Madrid'
import { Where } from './pages/Where'
import { Llamadas } from './pages/Llamadas'
import { Cenas } from './pages/Cenas'
import { Sitios } from './pages/Sitios'
import './index.css'
import { Final } from './pages/Final'

export function App () {
  return (
    <main className='bg-[#0F172B] h-screen items-center flex justify-center text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<Introduction />} />
        <Route path='/photos' element={<Madrid />} />
        <Route path='/memories' element={<Where />} />
        <Route path='/places' element={<Sitios />} />
        <Route path='/dinner' element={<Cenas />} />
        <Route path='/calls' element={<Llamadas />} />
        <Route path='/madrid' element={<Madrid />} />
        <Route path='/final' element={<Final />} />
      </Routes>
    </main>
  )
}
