let recipeSection = document.querySelector(".recipe-section")
let recipeSlider = document.querySelector(".trending-recipes-slider")
let api = "https://dummyjson.com/recipes?limit=50"

async function extractingRecipeData() {
  try {
    let res = await fetch(api)
    let { recipes } = await res.json()
    recipes.forEach((item) => {
      recipeSection.innerHTML += `
       <div class="card">
        <div class="img-section">
          <p class="recipe-level">${item.difficulty}</p>
          <img src=${item.image} alt=${item.name}>
          <p class="wishlist">
            <i class="fa-solid fa-heart"></i>
          </p>
        </div>
        <div class="cuisine-rating">
          <p class="recipe-cuisine">${item.cuisine}</p>
          <p class="recipe-rating"><i class="fa-solid fa-star"></i> ${item.rating}</p>
        </div>
        <h1 class="recipe-title">${item.name}</h1>
        <div class="duration">
          <p>${item.prepTimeMinutes + item.cookTimeMinutes}m <br> Total</p>
          <p>${item.caloriesPerServing} <br> Cal</p>
          <p>${item.mealType[0]} <br> Meal</p>
        </div>
        <div class="tags">
          <p>${item.tags[0]}</p>
            <p>${item.tags[1]}</p>
        </div>
      </div>
      `
      recipeSlider.innerHTML += `
       <div class="card">
        <div class="img-section">
          <p class="recipe-level">${item.difficulty}</p>
          <img src=${item.image} alt=${item.name}>
          <p class="wishlist">
            <i class="fa-solid fa-heart"></i>
          </p>
        </div>
        <div class="cuisine-rating">
          <p class="recipe-cuisine">${item.cuisine}</p>
          <p class="recipe-rating"><i class="fa-solid fa-star"></i> ${item.rating}</p>
        </div>
        <h1 class="recipe-title">${item.name}</h1>
        <div class="duration">
          <p>${item.prepTimeMinutes + item.cookTimeMinutes}m <br> Total</p>
          <p>${item.caloriesPerServing} <br> Cal</p>
          <p>${item.mealType[0]} <br> Meal</p>
        </div>
        <div class="tags">
          <p>${item.tags[0]}</p>
            <p>${item.tags[1]}</p>
        </div>
      </div>
      `
    })
  } catch (error) {
   recipeSection.innerHTML = error
  }
}
extractingRecipeData()
