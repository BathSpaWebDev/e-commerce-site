const Cart = ( {cart} ) => {

  return (
    <div className="cart">
        <div className="cart-volume">{cart.length}</div>
        <a>Cart</a>
    </div>
  )
}

export default Cart