function nwd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// SKRACANIE
function skracajUlamek() {

    let a = parseInt(document.getElementById('l1').value);
    let b = parseInt(document.getElementById('m1').value);

    if (isNaN(a) || isNaN(b) || b === 0) return;

    let dzielnik = nwd(a, b);

    if (dzielnik === 1) {
        document.getElementById('ulsk').innerHTML = "Ułamka nie da się skrócić";
        document.getElementById('l1s').value = "";
        document.getElementById('m1s').value = "";
    } else {
        document.getElementById('l1s').value = a / dzielnik;
        document.getElementById('m1s').value = b / dzielnik;
        document.getElementById('ulsk').innerHTML = "Ułamek skrócony ma postać:";
    }
}

// DODAWANIE
function dodajUlamki() {

    let l2 = parseInt(document.getElementById('l2').value);
    let m2 = parseInt(document.getElementById('m2').value);
    let l3 = parseInt(document.getElementById('l3').value);
    let m3 = parseInt(document.getElementById('m3').value);

    if (isNaN(l2) || isNaN(m2) || isNaN(l3) || isNaN(m3) || m2 === 0 || m3 === 0) return;

    let licznik = l2 * m3 + l3 * m2;
    let mianownik = m2 * m3;

    let dzielnik = nwd(licznik, mianownik);

    licznik /= dzielnik;
    mianownik /= dzielnik;

    document.getElementById("wynikDod").innerHTML =
        "Wynik: " + licznik + "/" + mianownik;
}

// ODEJMOWANIE
function odejmijUlamki() {

    let l4 = parseInt(document.getElementById('l4').value);
    let m4 = parseInt(document.getElementById('m4').value);
    let l5 = parseInt(document.getElementById('l5').value);
    let m5 = parseInt(document.getElementById('m5').value);

    if (isNaN(l4) || isNaN(m4) || isNaN(l5) || isNaN(m5) || m4 === 0 || m5 === 0) return;

    let licznik = l4 * m5 - l5 * m4;
    let mianownik = m4 * m5;

    let dzielnik = nwd(licznik, mianownik);

    licznik /= dzielnik;
    mianownik /= dzielnik;

    document.getElementById("wynikOde").innerHTML =
        "Wynik: " + licznik + "/" + mianownik;
}
