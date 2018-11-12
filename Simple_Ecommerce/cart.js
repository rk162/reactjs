import React from "react";

class Cart extends React.Component {
  render() {
    const {
      cartItems,
      toggleCart,
      isCartOpen,
      removeItemFromCart
    } = this.props;
    return (
      <div className={`cart ${isCartOpen === true ? "cart--active" : ""}`}>
        <div className="cartHeading">My Cart</div>
        <div
          className="cartCloseBtn"
          onClick={e => {
            toggleCart(e, false);
          }}
        >
          Close
        </div>
        {cartItems.length > 0 ? (
          <div className="cartList">
            {cartItems.map(cartItem => (
              <div className="cartListItem" key={`c-${cartItem.name}`}>
                <div
                  className="cartListItem__removeBtn"
                  onClick={e => {
                    removeItemFromCart(e, cartItem);
                  }}
                >
                  <img src="img/error.svg" alt="remove" />
                </div>
                <img
                  className="cartListItem__image"
                  src={cartItem.image}
                  alt={cartItem.name}
                  title={cartItem.name}
                />
              </div>
            ))}
          </div>
        ) : (
          false
        )}
        {cartItems.length === 0 ? (
          <div className="cartEmpty">Your Cart is Empty</div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default Cart;
