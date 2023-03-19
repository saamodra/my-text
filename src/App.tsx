import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from 'components/Header'
import CategoryList from 'pages/Category/List'
import TextList from 'pages/Text/List'
import Login from 'pages/Login'
import * as PageRoutes from 'lib/routes'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={PageRoutes.loginPageUrl()} element={<Login />} />
        <Route path={PageRoutes.homePageUrl()} element={<CategoryList />} />
        <Route path={PageRoutes.textListUrl()} element={<TextList />} />
      </Routes>
    </div>
  )
}

export default App
