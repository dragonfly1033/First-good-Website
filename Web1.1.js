var imgs = [
    'Pic 1.png',
    'Pic 2.png',
    'Pic 3.png',
    'Pic 4.png',
    'Pic 5.png'
]
var img = document.querySelector('img')
var count = 1

function now(){
    if (count === 5){
        count = 0
    }
    img.src = imgs[count]
        count = count +1
}
