import React from 'react';
import Header from './../Header';
import CategoryFilter from './../CategoryFilter';
import RestaurantList from './../RestaurantList';


const HomeScreen = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  filteredRestaurants, 
  favorites, 
  toggleFavorite, 
  cart, 
  addToCart, 
  removeFromCart 
}) => {
  return (
    <div className="pb-20">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <RestaurantList 
        restaurants={filteredRestaurants}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      
    </div>
  );
};

export default HomeScreen;