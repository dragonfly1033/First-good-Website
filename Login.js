function check(){
    var a = 'admin';
    var b = 'admin123';         

    var unam = document.getElementById('unam').value;
    var pwd = document.getElementById('pwd').value
    if (unam === a){
        if (pwd ===  b){
            document.getElementById('1').style.opacity = '0';
            document.getElementById('2').style.opacity = '0';
            document.getElementById('1').style.width = '0px';
            document.getElementById('2').style.width = '0px';
            document.getElementById('1').style.lineHeight = '0px';
            document.getElementById('2').style.lineHeight = '0px';
            document.getElementById('unam').style.borderRightColor = '#4717f6';
            document.getElementById('pwd').style.borderRightColor = '#4717f6';
            document.getElementById('3').style.width = '98px';
            document.getElementById('3').style.opacity = '1';
            document.getElementById('butt').style.borderRightColor = '#00ff4c';
        }else{
            document.getElementById('1').style.opacity = '1';
            document.getElementById('2').style.opacity = '1';
            document.getElementById('1').style.width = '220px';
            document.getElementById('2').style.width = '220px';
            document.getElementById('1').style.lineHeight = '46px';
            document.getElementById('2').style.lineHeight = '46px';
            document.getElementById('unam').style.borderRightColor = '#ff0000';
            document.getElementById('pwd').style.borderRightColor = '#ff0000';
            document.getElementById('3').style.width = '0px';
            document.getElementById('3').style.opacity = '0';
            document.getElementById('butt').style.borderRightColor = '#4717f6';
        }
        
    }else{
        document.getElementById('1').style.opacity = '1';
        document.getElementById('2').style.opacity = '1';
        document.getElementById('1').style.width = '220px';
        document.getElementById('2').style.width = '220px';
        document.getElementById('1').style.lineHeight = '46px';
        document.getElementById('2').style.lineHeight = '46px';
        document.getElementById('unam').style.borderRightColor = '#ff0000';
        document.getElementById('pwd').style.borderRightColor = '#ff0000';
        document.getElementById('3').style.width = '0px';
        document.getElementById('3').style.opacity = '0';
        document.getElementById('butt').style.borderRightColor = '#4717f6';
    }
}
function none(){
    alert("This doesn't do anything....yet")
}
