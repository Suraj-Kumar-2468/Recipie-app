import React,{useEffect,useState} from 'react'
import Recipe from './recipe'
import './style.css'


const App = () =>{
  const APP_ID = '4ddadd21';
  const APP_Key = '2b3860f0e4fd62489d80d73cdf01fe21';
  const [recipes,setRecipes] = useState([]);
  const [search ,setsearch] = useState('')  
  
  const [query,setquery] = useState('chicken');
  useEffect(()=>{
    getRecipies();
  },[query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`)
    const data = await response.json()
    setRecipes(data.hits);

    // console.log(data.hits);
  }

  const updatesearch = e => 
  {  
    setsearch(e.target.value)
  }

  const getSearch = e =>
    {
    e.preventDefault()
    setquery(search);
    setsearch("")
    }

  return(
    <div 
      className ='App' 
      onSubmit={getSearch}>
        
        <form 
          className="search-form">
          <input 
            type="text" 
            className="search-bar" 
            value={search} 
            onChange={updatesearch}/>
          
          <button 
            className="search-button">Search
          </button>
        
        </form>
    <div className="Recipes">
    {recipes.map(recipe =>(
      <Recipe 
        key={recipe.recipe.label}
        title ={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}
      />
    ))}
    </div>
    </div>
  )
}


export default App
