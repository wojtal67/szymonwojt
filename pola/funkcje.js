function obliczPr() {

    let a = parseFloat(document.getElementById('pr_a').value);
    let b = parseFloat(document.getElementById('pr_b').value);

    let pole = a * b;
    let obw = 2 * a + 2 * b;

    document.getElementById('p_polePr').innerHTML = "Pole prostokąta = " + pole;
    document.getElementById('p_obwPr').innerHTML = "Obwód prostokąta = " + obw;

    document.getElementById('p_polePr').style.display = 'block';
    document.getElementById('p_obwPr').style.display = 'block';
}


function obliczTrojkat() {

    let a = parseFloat(document.getElementById('tr_a').value);
    let b = parseFloat(document.getElementById('tr_b').value);
    let c = parseFloat(document.getElementById('tr_c').value);
    let h = parseFloat(document.getElementById('tr_h').value);

    let pole = (a * h) / 2;
    let obw = a + b + c;

    document.getElementById('p_poleTr').innerHTML = "Pole trójkąta = " + pole;
    document.getElementById('p_obwTr').innerHTML = "Obwód trójkąta = " + obw;

    document.getElementById('p_poleTr').style.display = 'block';
    document.getElementById('p_obwTr').style.display = 'block';
}


function obliczKolo() {

    let r = parseFloat(document.getElementById('k_r').value);

    let pole = Math.PI * r * r;
    let obw = 2 * Math.PI * r;

    document.getElementById('p_poleK').innerHTML = "Pole koła = " + pole.toFixed(2);
    document.getElementById('p_obwK').innerHTML = "Obwód koła = " + obw.toFixed(2);

    document.getElementById('p_poleK').style.display = 'block';
    document.getElementById('p_obwK').style.display = 'block';
}


function obliczTrapez() {

    let a = parseFloat(document.getElementById('t_a').value);
    let b = parseFloat(document.getElementById('t_b').value);
    let c = parseFloat(document.getElementById('t_c').value);
    let d = parseFloat(document.getElementById('t_d').value);
    let h = parseFloat(document.getElementById('t_h').value);

    let pole = ((a + b) * h) / 2;
    let obw = a + b + c + d;

    document.getElementById('p_poleT').innerHTML = "Pole trapezu = " + pole;
    document.getElementById('p_obwT').innerHTML = "Obwód trapezu = " + obw;

    document.getElementById('p_poleT').style.display = 'block';
    document.getElementById('p_obwT').style.display = 'block';
}


function hideWyniki() {

    document.getElementById('p_polePr').style.display = 'none';
    document.getElementById('p_obwPr').style.display = 'none';

    document.getElementById('p_poleTr').style.display = 'none';
    document.getElementById('p_obwTr').style.display = 'none';

    document.getElementById('p_poleK').style.display = 'none';
    document.getElementById('p_obwK').style.display = 'none';

    document.getElementById('p_poleT').style.display = 'none';
    document.getElementById('p_obwT').style.display = 'none';
}
