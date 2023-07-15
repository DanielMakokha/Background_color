const colors=['red','green','blue','orange','indigo'];
var color=document.querySelector('.color');
var button=document.querySelector('.change');
//document.querySelector('.text').textContent=colors[1]

//changing the css using javascript

button.addEventListener('click', function(){
    var final_color=colors[randomColor()];
document.body.style.backgroundColor=final_color;
color.textContent=final_color;

function randomColor(){
    return Math.floor(Math.random()*colors.length)
}
})