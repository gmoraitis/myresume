document.getElementById('msOutput').style.visibility = 'hidden';
document.getElementById('cryptOutput').style.visibility = 'hidden';


document.getElementById("msInput").addEventListener("input",function(e){
    document.getElementById('msOutput').style.visibility = 'visible';

    let ms = e.target.value.split('').reverse().join('n,+@,7');
    document.getElementById('numOutput').innerText = ms; 
})


document.getElementById("cryptInput").addEventListener("input",function(e){
    document.getElementById('cryptOutput').style.visibility = 'visible';

    let ms = e.target.value.split('n,+@,7').reverse();
    document.getElementById('realOutput').innerText = ms.toString().replace(/,/g,"");
})





