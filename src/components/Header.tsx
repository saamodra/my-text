import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from 'redux/context'

function Header() {
  const url = useLocation()
  const { state } = useContext(AppContext)

  return (
    <div className="p-4 text-primary text-xl font-sans">
      <h1 className="font-bold text-center">{url.pathname === '/' ? 'My Text' : state.pageTitle}</h1>
    </div>
  )
}

export default Header
