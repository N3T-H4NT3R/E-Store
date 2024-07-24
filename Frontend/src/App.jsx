import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Category from './Pages/Category/Category'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import Product from './Pages/Product/Product'
import For_O_For from './Pages/For_O_For'
import Context from './Context/Context'



const App = () => {

  const { Category_Image } = useContext(Context)

  return (
    <>
    {
      Category_Image.map((cat_pic) => (
        <section key={cat_pic.id}>
        <Navbar/>
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/womens' element={<Category categoryBanner = {cat_pic.Womane_Cat_Image} categoryName = {"Womens"} />} />
          <Route path='/mens' element={<Category categoryBanner = {cat_pic.Mane_Cat_Image} categoryName = {"Mens"} />} />
          <Route path='/kids' element={<Category categoryBanner = {cat_pic.Kids_Cat_Image} categoryName = {"Kids"} />} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/*' element={<For_O_For/>} />
        </Routes>
        <Footer/>
    </section>
      ))
    }
    </>
  )
}

export default App
