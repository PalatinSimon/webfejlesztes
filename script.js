function vegsoar() {
    let ossz = 0;


    let apartman = document.getElementById('apartman').value;
    if (apartman == '1' || apartman == '2') {
        ossz += 80000; 
    } else if (apartman == '3' || apartman == '4') {
        ossz += 60000; 
    }


    let gyerekdb = parseInt(document.getElementById('gyerekdb').value);
    ossz += gyerekdb * 5000;

    let felnottdb = parseInt(document.getElementById('felnottdb').value);
    ossz += felnottdb * 5000; 


    if (document.getElementById('allat').checked) {
        ossz += 5000; 
    }
    if (document.getElementById('serult').checked) {
        ossz -= 5000; 
    }
    if (document.getElementById('gyagy').checked) {
        ossz += 5000; 
    }
    if (document.getElementById('matrac').checked) {
        ossz += 5000;
    }


    document.getElementById('vegsoar').value = ossz;
}


document.getElementById('szamolas').addEventListener('click', vegsoar);

//-----------------------------------------

