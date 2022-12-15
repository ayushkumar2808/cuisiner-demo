fetch("https://www.themealdb.com/api/json/v1/1/random.php")

  .then((data) => {
    return data.json();
  })
  .then((randomMealData) => {
    console.log(randomMealData);
    let data = "";
    let data2 = "";
    
    data += `    <div id="random-meal-card">
  <div>
    <img class="random-meal-image" src="${randomMealData.meals[0].strMealThumb}" alt="Meal Image" />
  </div>
  <div id="random-meal-details">
    <h3>${randomMealData.meals[0].strMeal}</h3>
    <h4>Category: ${randomMealData.meals[0].strCategory}</h4>
    <h4>Area: ${randomMealData.meals[0].strArea}</h4>
  </div>
</div>`;
    data2 += `    <div id="modal">
    <div id="modal-close-button">
  <h3>Dish Name: ${randomMealData.meals[0].strMeal}</h3>
  <button id="modal-close">Close</button>
  </div>
  <h4>Category: ${randomMealData.meals[0].strCategory}</h4>
  <h4>Area: ${randomMealData.meals[0].strArea}</h4>
  <h3>Ingredients</h3>
  <h4>${randomMealData.meals[0].strIngredient1},${randomMealData.meals[0].strIngredient2},${randomMealData.meals[0].strIngredient3},
  ${randomMealData.meals[0].strIngredient4},
  ${randomMealData.meals[0].strIngredient5},${randomMealData.meals[0].strIngredient6},
  ${randomMealData.meals[0].strIngredient7}, <br>${randomMealData.meals[0].strIngredient8},${randomMealData.meals[0].strIngredient9},
  ${randomMealData.meals[0].strIngredient9},${randomMealData.meals[0].strIngredient10}.</h4>
</div> `;
    document.getElementById("modal-flex").innerHTML = data2;
    document.getElementById("meal-card-flex").innerHTML = data;
    var closeMod =document.getElementById("modal")
  document.getElementById('modal-close').addEventListener('click', ()=>{
      closeMod.style.display = 'none'
  })
  })
  .catch((error) => {
    console.log(error);
  });

  var input = document.getElementById('searchbox')
  function handleClick(){
    var catValue=input.value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catValue}`).then((catData) => {
        return catData.json();
      })
      .then((catMealData)=>{
        console.log(catMealData)
        catData=""
        for(i=0;i<(catMealData.meals).length;i++){
        catData+=`   <div class="card">
        <img id="catimg"
          src="${catMealData.meals[i].strMealThumb}"
          alt="img"
        />
        <h1 class="title">${catMealData.meals[i].strMeal}</h1>
      </div>`
        }
        document.getElementById('cat-search').innerHTML=catData
      })
      
    
  }



 