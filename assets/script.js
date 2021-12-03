
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
})

