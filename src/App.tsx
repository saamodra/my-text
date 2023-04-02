import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from 'components/Header'
import CategoryList from 'pages/Category/List'
import Login from 'pages/Login'
import AppProvider from 'redux/context'
import * as PageRoutes from 'lib/routes'

function App(): JSX.Element {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path={PageRoutes.loginPageUrl()} element={<Login />} />
          <Route path={PageRoutes.homePageUrl()} element={<CategoryList />} />
        </Routes>

        <Toaster
          toastOptions={{
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </AppProvider>
  )
}

export default App
