import { useEffect, useState } from 'react';
import './Food.css';
import Card from './Card'

const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Food() {

  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");

  const foodHandler = async (title) => {
    const response = await fetch(`${apiurl + title}`);
    const data = await response.json();
    setFood(data.meals);
    setSearch("");    
  }

  useEffect(() => {
    foodHandler("Bread");
  }, []);

  return (
    <div className="foodRecipe">
      <header className='header'>
        <h1>Food Recipes</h1>
        <form action={() => foodHandler(search)} className="search">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} name='search' id='search' placeholder='Search....' />
          <button><i className="fi fi-br-search"></i></button>
        </form>
      </header >
      <main className='main'>
        {food?.length > 0 ? (
          <>{food.map((fr, id) => (<Card key={id} food={fr} />))}</>
        ) : (
          <h3 className='empty'>Recipe Not found</h3>
        )}
      </main>
    </div>
  );
}

export default Food;
