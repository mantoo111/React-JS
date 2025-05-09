import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='fixed top-4 left-4 z-50 bg-blue-500 text-white px-4 py-2 rounded-md'
      >
        {
          isMenuOpen ?
          <span>&times;</span>
          :
          <span> &#9776;</span>
        }
       
      </button>

      {/* Menu */}
      <div className={`fixed top-0 right-0 w-full bg-white shadow-md transition-all duration-300 z-40 ${
        isMenuOpen ? 'left-0' : 'left-full'
      }`}>
        <ul className='flex justify-end space-x-6 p-4 text-black font-bold'>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
        </ul>
      </div>
    </>
  )
}

export default App
