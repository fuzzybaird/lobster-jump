let cage = null
let right = 0

function moveCageLeft(){
    right = parseInt(cage.style.left, 10);

   console.log(cage.style.left)
}
function start(){
    cage = document.getElementById('cage')
    moveCageLeft()
}
start()