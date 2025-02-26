let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}
// PRACTICE TASK
function groceryTracker() {
    let amount1 = parseFloat(document.getElementById('grocery1').value);
    let amount2 = parseFloat(document.getElementById('grocery2').value);
    let amount3 = parseFloat(document.getElementById('grocery3').value);

    let total = amount1 + amount2 + amount3;
    document.getElementById('groceryTotal').innerText = `The total amount is: $${total}`;

}