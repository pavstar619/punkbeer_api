var randomBeer = document.querySelector('.random-beer');
var descriptionDisplay = document.querySelector('.description');

function beerButton(){
    fetch('https://api.punkapi.com/v2/beers/random').then(Response =>{
    return Response.json()
    })
    .then(data => {
        console.log(data);
        var name = data[0].name;
        console.log(name);
        var description = data[0].description;
        console.log(description);
        var {volume} = data[0];
        var volumeValue = volume.value;

        var img = data[0].image_url;

        randomBeer.innerHTML = name + ' ';
        descriptionDisplay.innerHTML = description;
        document.getElementById("beer-img").src = img;
    })

}
