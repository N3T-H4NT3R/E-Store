import React, { useContext } from 'react'
import './Hero.css'
import Arrow_Icon from '../../assets/arrow.png'
import Context from '../../Context/Context'


const Hero = () => {

    const {
        Hero
    } = useContext(Context)

  return (
    <>
    {Hero.map((hero) => (
    <div className="hero" key={hero.id}>
        <div className="hero-left">
            <h1>{hero.Title1}</h1>
        <div className="hero-hand">
            <p>{hero.Title2}</p>
            <img src={hero.Small_Logo}/>
        </div>
        <div className='hero-info'>
            <p>{hero.Title3}</p>
            <p>{hero.Title4}</p>
        </div>
        <a href="/#newest-product" className="latest-btn">
            <button>Latest Collations</button>
            <img src={Arrow_Icon}/>
        </a>
        </div>
        <div className="hero-right">
            <img src={hero.Large_Logo}/>
        </div>
    </div>
    ))}
    </>
  )
}

export default Hero