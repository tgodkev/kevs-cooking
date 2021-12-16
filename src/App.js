import React from "react";
import RecipeReviewCard from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import recipes from "./Recipes";




  function createCard(recipes){
    return(
      <RecipeReviewCard 
      id={recipes.id}
      key={recipes.id}
      name={recipes.name}
      imgURL={recipes.imgURL}
      instructions={recipes.instructions}
      ingredients={recipes.ingredients}
      description={recipes.description}
      time={recipes.time}
      />
    )
  }



function App() {
  return (
    <div>
    <Header />
    {recipes.map(createCard)}
    <Footer />
    </div>

  );
}

export default App;
