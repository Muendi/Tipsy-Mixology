const apiKey = "cG2e3EWcvCt1+5D3eFJRFw==a8PH20A02uf2KmlM";
const apiUrl = "https://api.api-ninjas.com/v1/cocktail?name=";

const getCocktailData = (name) =>{
    var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "cG2e3EWcvCt1+5D3eFJRFw==a8PH20A02uf2KmlM");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch(`https://api.api-ninjas.com/v1/cocktail?name=${name}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result)
    document.getElementById("view-cocktails").innerHTML = '';
    for ( const i in data){
        const details = data[i];
        console.log(details);
        document.getElementById("view-cocktails").innerHTML += `
        <div  id="cocktail-details">
        <h2 id="cocktail-name">${details.name}</h2>
        <h6>Ingredients</h6>
  <div>
    <ul id="cocktail-ingredients">
    ${details.ingredients.map((k)=>`<li>${k}</li>`)}
    </ul>
  </div>
  <h6 id="cocktail-instructions">Instructions</h6>
  <p>${details.instructions}</p>
</div>`;
    }

  })
  .catch(error => console.log('error', error));

}


const handleNav = (name) =>{
  document.getElementById(name).scrollIntoView()
}

const handleSearch =  async () =>{
  const d = await getCocktailData(document.getElementById("search-cocktail").value)
  document.getElementById("view-cocktails").scrollIntoView()

}




document.getElementById('form-submit').addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submit",e)
  document.getElementById('review1').innerHTML += `
  <div class="review">
  <h4>${document.getElementById('input-name').value}</h4>
  <p>${document.getElementById('input-review').value}</p>
</div>`
document.getElementById('input-name').value = ""
document.getElementById('input-review').value = ""

  // handle submit
});

//   
// getCocktailData();


/*

// SEARCH BUTTON
// Adding reference to the search button
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-cocktail");

// event listener to the search button
searchBtn.addEventListener("click", async () =>{

    // getting user input from the search bar
    const userInput = searchInput.value; 

}); */
