import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LibraryButton from './components/LibraryButton'
import Footer from './components/Footer'
import Header from './components/LibraryHeader'
import LibraryBooks from './components/LibraryBooks'
import LibraryLogin from './components/LibraryLogin'
import List from './components/List'

function App() {

  return (
    <>
      {/* <div>
        <Header />
        <main>
          <LibraryBooks />
          <LibraryButton />
        </main>
        <Footer />
      </div> */}
      <List />
    </>
  )
}

export default App
