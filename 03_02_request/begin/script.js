fetch('https://hplussport.com/api/products?order=name')
.then(
    function(response){
        return response.json()
    }
)
//.then(function(jsonData){
    //console.log(jsonData);
    //var description = jsonData[0].description
    //console.log(description);
    //var name = jsonData[0].name
    //console.log(name)

    //var product = document.createElement("li")
    //product.innerHTML = name;
    //document.body.appendChild(product)
//})

.then(function(jsonData){
    for(items in jsonData){
        var productName = jsonData[items].name;
        var products = document.createElement("li");
        products.innerHTML=productName;
        document.body.appendChild(products);

        var producImg = jsonData[items].image;
        var image = document.createElement("img");
        image.setAttribute('src',producImg)
        document.body.appendChild(image);
    }
})