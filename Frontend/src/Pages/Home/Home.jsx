import React, { useContext } from 'react'
import Context from '../../Context/Context'
import Hero from '../../Components/Hero/Hero'
import Popular from '../../Components/Popular/Popular'
import NewProduct from '../../Components/NewProduct/NewProduct'

const Home = () => {

  const {

  } = useContext(Context)
  return (
    <main className='main'>
      <Hero/>
      <Popular/>
      <NewProduct/>
    </main>
  )
}

export default Home