console.log('%c HI', 'color: firebrick')


///////////////////////////////////////////////// first Challene /////////////////
const imgUrl = " https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(function(response){
    return response.json();

})
.then(function(data){
    //console.log(data)

    const URLarray = data.message  // set varaible as an array 
    console.log(URLarray);          

    URLarray.forEach(url => addImages(url))         // we make a callback function
      
});

function addImages(dog){   // dog is the same as url, for each dog (url) picture
    console.log(dog);
    const imageContainer = document.getElementById('dog-image-container')
       
        let picture = document.createElement("img");

        picture.src = dog
        //console.log(picture)
        imageContainer.appendChild(picture)   //imageContainer is our parent, and picture the child

};

///////////////////////////////////// Second Challenge ////////////////////////////////


const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(function(response){
    return response.json();

})
.then(function(data){
    //console.log(data)

    const URLobject = data.message // set varaible as object

    const breedList = Object.keys(URLobject) // converting huge object into an erray

    updatebreeds(breedList)  //callingback a function
    
});

function updatebreeds(dogbreeds){  // making the call back function

        dogbreeds.forEach(breed => addbreed(breed)) // for loop more beautiful, for each element of my erray, passing that into anoter callback
        
}
function addbreed(breed){ // add each breed into the DOM including a li
    console.log(breed);
    let li = document.createElement("li")
    const parent = document.getElementById("dog-breeds")
    li.innerText = breed
    parent.appendChild(li);

};

/////////////////////////////////////// Third Challenge /////////////////////////////////////

