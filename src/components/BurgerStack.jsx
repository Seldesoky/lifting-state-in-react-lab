// BurgerStack.jsx
import React from 'react';

const BurgerStack = ({ ingredients, removeIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeIngredient(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
