const showFruit=()=> {
    let str = `
     <h1> Fruits</h1>
     <p><input type="text" id="fruits"></p>
     <p><button onclick='showdetail()'>Add</button></p>
`
    root.innerHTML = str;
}

function showdetail() {
    let fruit = fruits.value;
    if (fruit) {
        result.innerHTML += fruit + "<br>";
        fruits.value = "";
    }
}
