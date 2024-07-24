import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import Context from '../../Context/Context'
import { FiMenu } from "react-icons/fi";


const Navbar = () => {

    const {
        NavLogo,
        Active,
        setActive,
        Menu,
        setMenu,
        TotalCartProducts,
    } = useContext(Context)

    return (
    NavLogo.map((logo) => (
    <nav className="navbar" key={logo.id}>

        <div className="left-side">
           <img src={logo.Image} alt={logo.Title}/>
             <Link to="/" ><p>{logo.Title}</p></Link>
            <FiMenu className='menu-icon' onClick={() => {setMenu(Menu == false ? true : false)}} />
        </div>

        <div className={`middle-side ${Menu == false ? "hide-for-navber" : ""}`}>
            <ul>
                <li><Link className='ancur' onClick={() => {setActive("all")}} to="/">Shop {Active == "all" ? <hr/> : <></>} </Link></li>
                <li><Link className='ancur' onClick={() => {setActive("mens")}} to="/mens">Mens {Active == "mens" ? <hr/> : <></>} </Link></li>
                <li><Link className='ancur' onClick={() => {setActive("womens")}} to="/womens">Womens {Active == "womens" ? <hr/> : <></>} </Link></li>
                <li><Link className='ancur' onClick={() => {setActive("kids")}} to="/kids">Kids {Active == "kids" ? <hr/> : <></>} </Link></li>
            </ul>
        </div>

        <div className={`right-side auth-nav-list ${Menu == false ? "hide-for-navber" : ""}`}>
          <img src={logo.Profile_Picture} alt='Carlos' id='carlos'/>
            <Link to='/cart' className='cart'>
                <TiShoppingCart className='cart-icon'/>
                <div className="cart-counter">{TotalCartProducts()}</div>
            </Link>
        </div>
    </nav>
        ))
  )
}

export default Navbar