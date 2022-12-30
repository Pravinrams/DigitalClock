
const api_url = 
      "https://type.fit/api/quotes";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    var datafiltered = data[Math.floor(Math.random() * 1000)]

    console.log(datafiltered);
    showQ(datafiltered)
}

getapi(api_url);

function showQ(data) {
    // Setting innerHTML as tab variable
    document.getElementById("qtext").innerHTML = data.text;
    document.getElementById("qauth").innerHTML = data.author;
}