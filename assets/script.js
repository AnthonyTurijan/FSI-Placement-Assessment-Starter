
let yourName = "Anthony Turijan" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type

let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
function updateGinger(displayGinger){
    let ginger = document.querySelector('#qty-gb')
    ginger.innerHTML = displayGinger
}
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    updateGinger(`${gb}`)
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Event listener for clicks on the "-" button for ginger bread cookie
document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0){
        gb--
    }
    updateGinger(`${gb}`)
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Chocolate Chip Code

function updateChocolate(displayChocolate){
    let chocolate = document.querySelector('#qty-cc')
    chocolate.innerHTML = displayChocolate
}

//Event Lister Plus and Minus Chocolate Chip

document.getElementById('add-cc').addEventListener('click', function(){
    cc++
    updateChocolate(`${cc}`)
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0){
        cc--
    }
    updateChocolate(`${cc}`)
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Sugar Sprinkle Code

function updateSugar(displaySugar){
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displaySugar
}

document.getElementById('add-sugar').addEventListener('click', function(){
    sugar++
    updateSugar(`${sugar}`)
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0){
        sugar--
    }
    updateSugar(`${sugar}`)
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})
// Total Quantity Code
//document.getElementById('qty-total').innerHTML = 1

