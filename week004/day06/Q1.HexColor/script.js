let input = document.getElementById('res')
let btnClick = document.getElementById('submit')

btnClick.addEventListener('click', function(){
    let color = input.value
    let background = document.body
    background.style.backgroundColor = color
})


