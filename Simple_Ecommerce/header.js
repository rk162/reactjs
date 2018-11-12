import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {cartItems, toggleCart} = this.props;
    return (
      <header className="header">
        <div className="logo">
          <img src="./img/pokeball.svg" />
        </div>
        <div className="cartBtn" onClick={(e)=> {toggleCart(e, true)}}>
        <div className="cartItemCount">{cartItems.length} </div>
        <img src="./img/shopping-cart.svg" />
        </div>
      </header>
    );
  }
}

export default Header;
