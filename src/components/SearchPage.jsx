// src/components/SearchPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const SearchPage = () => {
  // Get query from URL
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  // Access CartContext functions
  const { addToCart } = useCart();

  // State for all products and filtered products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products from backend on component mount
  useEffect(() => {
    fetch("http://localhost:9090/back1/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Filter products based on search query whenever products or query changes
  useEffect(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (products.length > 0) {
      const results = products.filter((p) =>
        p.name.toLowerCase().includes(normalizedQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  // Handler to add product to cart with alert message
  const handleAddToCart = (product) => {
    addToCart(product); // update cart context
    alert(`${product.name} added to cart!`); // show alert
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for: "{query || "All Products"}"
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
            >
              <img
                src={`http://localhost:9090/back1/api/products/upload/${product.imagePath}`}
                alt={product.name}
                className="w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default SearchPage;
