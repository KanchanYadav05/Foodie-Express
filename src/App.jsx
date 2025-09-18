import React, { useState } from 'react';
import { restaurants } from './Components/data/MockData';
import useCart from './Components/hooks/UseCart';
import HomeScreen from './Components/screen/HomeScreen';
import CartScreen from './Components/screen/CartScreen';
import BottomNavigation from './Components/BottomNavigation';
import FloatingCartButton from './Components/FloatingCartButton';


const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  
  const { cart, addToCart, removeFromCart, getTotalAmount, getTotalItems } = useCart();

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || restaurant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (restaurantId) => {
    if (favorites.includes(restaurantId)) {
      setFavorites(favorites.filter(id => id !== restaurantId));
    } else {
      setFavorites([...favorites, restaurantId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {activeTab === 'home' && (
        <HomeScreen
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredRestaurants={filteredRestaurants}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}
      
      {activeTab === 'cart' && (
        <CartScreen
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          setActiveTab={setActiveTab}
          totalAmount={getTotalAmount()}
          totalItems={getTotalItems()}
        />
      )}

      <BottomNavigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        totalItems={getTotalItems()} 
      />

      {activeTab === 'home' && (
        <FloatingCartButton
          totalItems={getTotalItems()}
          totalAmount={getTotalAmount()}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
};

export default App;