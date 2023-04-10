function generatecat() { 
    var cat = document.createElement('img');
    var div = document.getElementById('cat-container');
    cat.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(cat);
}