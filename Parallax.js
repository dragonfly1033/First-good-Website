function open1(){
    document.getElementById('nav1').style.transitionDuration = '0.3s';
    document.getElementById('nav1').style.width = '500px';
    document.getElementById('nav1').style.opacity = '1';
    document.getElementById('menuimg').style.transitionDuration = '0.3s';
    document.getElementById('menuimg').style.marginLeft = '250px';
    document.getElementById('cancelimg').style.width = '35px';
    document.getElementById('over').style.opacity = '0.6';
    document.getElementById('over').style.zIndex = '8';
    document.getElementById('over').style.width = '100%';
 }
 function close1(){
    document.getElementById('nav1').style.transitionDuration = '0.3s';
    document.getElementById('nav1').style.width = '0px';
    document.getElementById('nav1').style.opacity = '0';
    document.getElementById('menuimg').style.transitionDuration = '0.3s';
    document.getElementById('menuimg').style.marginLeft = '10px';
    document.getElementById('over').style.opacity = '0';
    document.getElementById('over').style.zIndex = '-1';
    document.getElementById('over').style.width = '0%';
 }

//  $(document).ready(function{
//     var scrolLink = $('#link');
//     scrollLink.click(function(e){
//        e.prevent
//     })
//  })
 
// function a(){
//    document.getElementById('hey').innerHTML = '&#xf110;';
// }
// a();
// function b(){
//    var i;
//    for (i=0;i<10000;i++){
//       document.getElementById('hey').style.rotate = '1deg';
//    }
// }
// b();
