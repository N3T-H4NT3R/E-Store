import React, { useContext } from 'react'
import Context from '../../Context/Context'
import './Cart.css'
import Remove_Icon from '../../assets/cross.png'

const Cart = () => {

  const {
    All_Product,
    Payment_Account,
    Payment,
    Contact_List,
    Cart_Info,
    setPayment,
    CartItems,
    RemoveFromCart,
    TotalCartAmounts,
    TotalCartProducts,
  } =useContext(Context)

  return (
    <>
    <div className={`cart-products ${Payment == true ? "hide" : "show"}`}>

      {
        All_Product.map((product) => {
          if(CartItems[product.id] > 0){
            return <div key={product.id} className="cart-format">

                <img id='cart-image' src={product.Image}/>

                <div className="format">
                  <label>Name</label>
                 <p>{product.Name}</p>
                </div>

                <div className="format">
                  <label>Category</label>
                  <p>{product.category}</p>
                </div>

                <div className="format">
                  <label>Unit Price</label>
                  <p>{product.Price} &nbsp; ETB</p>
                </div>

                <div className="format">
                  <label>Quantity</label>
                  <span className='cart-quantity'>{CartItems[product.id]}</span>
                </div>
                
                <div className="format">
                  <label>Totla Price</label>
                  <p>{product.Price * CartItems[product.id]} &nbsp; ETB</p>
                </div>

                <div className="format">
                  <label>Remove</label>
                  <img id='cansel-btn' src={Remove_Icon} onClick={() => {RemoveFromCart(product.id)}} />
                </div>

         
                <hr />
                </div>
          }else{
            return null
          }
          })
      }
      <div className="total-cart-info">
        <h1>Total Price: {TotalCartAmounts()} &nbsp; ETB</h1>
      </div>
      <button id='payment-btn' className={`${TotalCartProducts() < 1 ? "hide" : ""}`} onClick={() => {setPayment(Payment == true ? false : true)}}>Payment</button>
    </div>
    <div className={`payment-system ${Payment == true ? "show" : "hide"}`}>
      <button id='payment-btn' onClick={() => {setPayment(Payment == true ? false : true)}}>Back To Cart</button>
    <div className="total-cart-info">
      <h1>Total Price: {TotalCartAmounts()} &nbsp; ETB</h1>
      <>
      {
        Cart_Info.map((info) => (
          <p key={info.id}
          style={{
            color: "#000000",
            margin: "2rem auto",
            width: "70%",
            textAlign: "center"
          }}
          >{info.Descriptions}</p>
        ))
      }
      </>
      {
        Contact_List.map((contact) => (
          <ul key={contact.id}>
          <li style={{
            fontSize: "24px",
            textDecoration: "underline",
            width: "auto",
            marginTop: "4rem",
            marginBottom: "1rem",
            cursor:"default"
          }}>{contact.Descriptions}
            </li>
            <li>Phone: +251 {contact.Phone}</li>
            <li>Address: {contact.Address}</li>
            <li>Telegram: {contact.Telegram}</li>
            <li>Email: {contact.Email}</li>
          </ul>
          ))}
      <div>
        <table>
        <thead>
          <tr>
            <th colSpan="3">
              <h4>Which Bank Would You Want To Pay</h4>
            </th>
          </tr>
          <tr>
            <th>Bank Name</th>
            <th>Account N<span>o</span></th>
          </tr>
        </thead>
        
          <tbody>
            {
              Payment_Account.map((account) => (   
              <tr key={account.id}>
                <td>{account.Account_Name}</td>
                <td>{account.Account_Number}</td>
              </tr>
              ))
            }

          </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  )
}

export default Cart