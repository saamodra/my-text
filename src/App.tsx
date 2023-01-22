import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import logo from './logo.svg'
import './App.css'
import { db } from './firebase'
import { IText } from './interface'

function App () {
  const [texts, setTexts] = useState<IText[]>([])

  async function getDb () {
    await getDocs(collection(db, 'texts'))
      .then((snapshot) => {
        const snapshotTexts: IText[] = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as IText))
        setTexts(snapshotTexts)
      })
  }

  useEffect(() => {
    getDb()
  }, [])

  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>)
}

export default App
