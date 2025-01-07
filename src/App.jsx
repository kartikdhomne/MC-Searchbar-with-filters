import "./App.css";
import { useState } from "react";

function App() {
  const foodData = [
    { id: 1, name: "Pizza", cuisine: "Italian", price: 250 },
    { id: 2, name: "Burger", cuisine: "American", price: 150 },
    { id: 3, name: "Sushi", cuisine: "Japanese", price: 500 },
    { id: 4, name: "Samosa", cuisine: "Indian", price: 300 },
    { id: 5, name: "Tacos", cuisine: "Mexican", price: 200 },
  ];

  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState(foodData);

  const filterFood = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchData(query);

    const filtered = foodData.filter(
      (food) =>
        food.name.toLowerCase().includes(query) ||
        food.cuisine.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <h1>Searchbar with Filters</h1>
      <input
        type="text"
        placeholder="Search by food or cuisine..."
        value={searchData}
        onChange={filterFood}
      />
      <div className="cards">
        {filteredData.length > 0 ? (
          <div className="filteredCards">
            {filteredData.map((item) => (
              <div key={item.id} className="card">
                <div>
                  <span>Name: </span> {item.name}
                </div>
                <div>
                  <span>Cuisine: </span> {item.cuisine}
                </div>
                <div>
                  <span>Price: </span> ${item.price}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>food item or cuisine not found</p>
        )}
      </div>
    </div>
  );
}

export default App;
