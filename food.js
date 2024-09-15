const loadFood=(foodName)=>{
   // let inputText=document.getElementById("search-input").value;
    let url=`https://themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    fetch(url)
          .then(res=>res.json())
          .then(data=>representMenus(data.meals))
          .catch(error=>console.log(error));
}

loadFood('potato');
const representMenus=(menus)=>{
   let container=document.getElementById("result-container");
   container.innerHTML='';
   menus.forEach(menu => {
    let menuCard=document.createElement('div');
    menuCard.classList='card card-compact bg-base-100 shadow-xl';
    menuCard.innerHTML=` <figure>
    <img
      src="${menu.strMealThumb}"
      alt="Image of ${menu.strMeal}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${menu.strMeal}!</h2>
    <p title="${menu.strInstructions}">${menu.strInstructions.slice(0,200)}...</p>
  </div>`;
container.appendChild(menuCard);
   });
}