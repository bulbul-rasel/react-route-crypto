import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import CoinDetails from './components/CoinDetails/CoinDetails'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails />}></Route>
        <Route path='/contact' element={<Contact />}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
          <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
