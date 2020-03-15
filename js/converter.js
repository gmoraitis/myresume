document.getElementById('weightOutput').style.visibility = 'hidden';
document.getElementById('tempOutput').style.visibility = 'hidden';


document.getElementById("lbsInput").addEventListener("input",function(e){
    document.getElementById('weightOutput').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
})

document.getElementById("tempInput").addEventListener("input",function(e){
    document.getElementById('tempOutput').style.visibility = 'visible';
    let temp = e.target.value;
    document.getElementById('fahrenheitOutput').innerHTML = (temp * 9/5) + 32;
    document.getElementById('kelOutput').innerHTML = temp + 273.15;
    document.getElementById('raOutput').innerHTML = (temp * 9/5) + 491.67;
})

