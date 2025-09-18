export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'chinese', name: 'Chinese', icon: '🥡' },
  { id: 'dessert', name: 'Dessert', icon: '🍰' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' }
];

export const restaurants = [
  {
    id: 1,
    name: "Palace",
    image: "./pizza.jpg ",
    rating: 4.5,
    time: "30-45 min",
    cuisine: "Italian, Pizza",
    category: "pizza",
    items: [
      { id: 1, name: "Margherita Pizza", price: 299, image: "./Margherita Pizza.jpg " },
      { id: 2, name: "Pepperoni Pizza", price: 399, image: "./Pepperoni Pizza.jpg" }
    ]
  },
  {
    id: 2,
    name: "Burger House",
    image: "./burger.jpg",
    rating: 4.2,
    time: "25-40 min",
    cuisine: "American, Fast Food",
    category: "burger",
    items: [
      { id: 3, name: "Classic Burger", price: 249, image: "./Classic Burger.jpg" },
      { id: 4, name: "Cheese Burger", price: 299, image: "./Cheese Burger.jpg" }
    ]
  },
  {
    id: 3,
    name: "Dragon Kitchen",
    image: "./chinese.jpg",
    rating: 4.3,
    time: "35-50 min",
    cuisine: "Chinese, Asian",
    category: "chinese",
    items: [
      { id: 5, name: "Fried Rice", price: 199, image: "./fried rice.jpg" },
      { id: 6, name: "Chowmein", price: 179, image: "./Chowmein.jpg" }
    ]
  },
  {
    id: 4,
    name: "Sweet Treats",
    image: "./dessert.jpg",
    rating: 4.6,
    time: "20-30 min",
    cuisine: "Desserts, Bakery",
    category: "dessert",   // ✅ correct category
    items: [
      { id: 7, name: "Chocolate Cake", price: 199, image: "./Chocolate Cake.jpg" },
      { id: 8, name: "Ice Cream Sundae", price: 149, image: "./Ice Cream Sundae.jpg" }
    ]
  },
  {
    id: 5,
    name: "Cool Drinks",
    image: "./drink.jpg",
    rating: 4.4,
    time: "15-25 min",
    cuisine: "Beverages",
    category: "drinks",   // ✅ correct category
    items: [
      { id: 9, name: "Cold Coffee", price: 99, image: "./Cold Coffee.jpg" },
      { id: 10, name: "Mojito", price: 129, image: "./Mojito.jpg" }
    ]
  }
];
