import React from "react";
import ListItem from './listItem';

class List extends React.Component {
  render() {
    const { pokemons, addItemToCart, cartItems } = this.props;
    return (
      <div className="list">
        {pokemons.map(pokemon => (
          <ListItem
            key={pokemon.name}
            pokemon={pokemon}
            addItemToCart={addItemToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    );
  }
}

export default List;
