import { createContext, useEffect, useState } from "react"


const Context = createContext()

export default Context

export const Context_Provider = ({children}) => {

    const [Active, setActive] = useState("all")
    const [Menu, setMenu] = useState(true)
    const [Payment, setPayment] = useState(false)

    // Navbar
    const [NavLogo, setNavLogo] = useState([])

    const Nav_Data = async () => {

        try{
            const response = await fetch("http://localhost:8000/navbar/")

            if (response.status == 200){
                const Data = await response.json()
                setNavLogo(Data)
                
            }else{
                throw Error("Logo and Title")
            }
            
        }catch(err){
            console.log(err)
        }
        }

    const [All_Product, setAll_Product] =  useState([])

    const All_Product_Data = async () => {

        try{
            const response = await fetch("http://localhost:8000/product/")

            if (response.status == 200){
                const Data = await response.json()
                setAll_Product(Data)
                
            }else{
                throw Error("Logo and Title")
            }
            
        }catch(err){
            console.log(err)
        }
        }

    const [About_The_Product, setAbout_The_Product] =  useState([])

    const About_The_Product_Data = async () => {

        try{
            const response = await fetch("http://localhost:8000/about-broduct/")

            if (response.status == 200){
                const Data = await response.json()
                setAbout_The_Product(Data)
                
            }else{
                throw Error("Logo and Title")
            }
            
        }catch(err){
            console.log(err)
        }
        }

    const [Contact_List, setContact_List] =  useState([])

    const Contact_Data = async () => {

        try{
            const response = await fetch("http://localhost:8000/contact-list/")

            if (response.status == 200){
                const Data = await response.json()
                setContact_List(Data)
                
            }else{
                throw Error("Logo and Title")
            }
            
        }catch(err){
            console.log(err)
        }
        }

    const [Category_Image, setCategory_Image] =  useState([])

    const Category_Image_Data = async () => {

        try{
            const response = await fetch("http://localhost:8000/catagory-image/")

            if (response.status == 200){
                const Data = await response.json()
                setCategory_Image(Data)
                
            }else{
                throw Error("sometings Went Error!")
            }
            
        }catch(err){
            console.log(err)
        }
        }

    const [Cart_Info, setCart_Info] =  useState([])

    const Cart_Info_Data = async () => {

        try{
            const response = await fetch("http://localhost:8000/cart/")

            if (response.status == 200){
                const Data = await response.json()
                setCart_Info(Data)
                
            }else{
                throw Error("sometings Went Error!")
            }
            
        }catch(err){
            console.log(err)
        }
        }

    const [Payment_Account, setPayment_Account] =  useState([])

    const Payment_Data = async () => {

        try{
            const response = await fetch("http://localhost:8000/payment-account/")

            if (response.status == 200){
                const Data = await response.json()
                setPayment_Account(Data)
                
            }else{
                throw Error("sometings Went Error!")
            }
            
        }catch(err){
            console.log(err)
        }
        }

    const [Footer, setFooter] = useState([])

    const Footer_Data = async () => {


        try{
            const response = await fetch("http://localhost:8000/footer/")

            if (response.status == 200){
                const Data = await response.json()
                setFooter(Data)
                
            }else{
                throw Error("Logo and Title")
            }
            
        }catch(err){
            console.log(err)
        }
        }


    // Hero Section
    const [Hero, setHero] = useState([])

    const Fetch_Hero = async () => {

        const response = await fetch("http://localhost:8000/hero/")

        if(response.status == 200){
            const Data = await response.json()
            setHero(Data)

        }else{
            setHero(null)
        }
    }
    
    const Added_To_Cart = () => {
        const Cart = {}

        for (let index = 0; index < All_Product.length; index++){
            Cart[index] = 0
        }

        return Cart
    }

    const [CartItems, setCartItems] = useState(() => {
        const cartFromStorage = localStorage.getItem("Cart");
        return cartFromStorage ? JSON.parse(cartFromStorage) : Added_To_Cart();
      });

    const AddToCart = (ProductID) => {
      setCartItems((prev) => {
        const updatedCart = { ...prev }
        updatedCart[ProductID] = (updatedCart[ProductID] || 0) + 1
        localStorage.setItem("Cart", JSON.stringify(updatedCart))
        return updatedCart
      })
    }
    
    const RemoveFromCart = (ProductID) => {
        setCartItems((prev) => {
          const updatedCart = { ...prev }
          updatedCart[ProductID] = (updatedCart[ProductID] || 0) - 1
          localStorage.setItem("Cart", JSON.stringify(updatedCart))
          return updatedCart
        })      
      }

      const TotalCartAmounts = () => {
        const Total_Amount = Object.values(CartItems).reduce((total, quantity, index) => {
          const product = All_Product.find((item) => item.id === Number(Object.keys(CartItems)[index]));
          if (product && quantity > 0) {
            return total + product.Price * quantity;
          }
          return total;
        }, 0);
      
        return Total_Amount;
      };

    const TotalCartProducts = () => {
        let Total_Product = 0
        for(const product in CartItems){
            if(CartItems[product]>0){
                Total_Product+=CartItems[product]
            }
        }
        return Total_Product
    }

    useEffect(() =>{
        Nav_Data()
        Fetch_Hero()
        Footer_Data()
        Payment_Data()
        Contact_Data()
        Cart_Info_Data()
        All_Product_Data()
        About_The_Product_Data()
        Category_Image_Data()
    }, [])

    const Context_Value = {
        Hero:Hero,
        About_The_Product,
        Payment:Payment,
        Payment_Account:Payment_Account,
        Contact_List:Contact_List,
        Footer,
        NavLogo:NavLogo,
        setPayment:setPayment,
        Active:Active,
        setActive:setActive,
        Menu:Menu,
        setMenu:setMenu,
        All_Product:All_Product,
        CartItems:CartItems,
        Cart_Info:Cart_Info,
        AddToCart:AddToCart,
        Category_Image:Category_Image,
        RemoveFromCart:RemoveFromCart,
        TotalCartAmounts:TotalCartAmounts,
        TotalCartProducts:TotalCartProducts,
    }

    return (
        <Context.Provider value={Context_Value}>
            {children}
        </Context.Provider>
    )
}