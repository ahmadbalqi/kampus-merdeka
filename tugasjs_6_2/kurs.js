function kosong1(){
    let frm = document.getElementById("formulir");
    frm.a1.value = " ";    
}
function kosong2(){
    let frm = document.getElementById("formulir");
    frm.a2.value = " ";
}
function nambah(){
    let frm = document.getElementById("formulir");
    let angkasatu = parseInt(frm.a1.value);
    let angkadua = parseInt(frm.a2.value);
    if (isNaN(angkasatu) || angkasatu == '' ){
        alert("Data kosong /bukan angka");
    }
    else if (isNaN(angkadua) || angkadua == '' ){
        alert("Data kosong /bukan angka");
    }
    else {
        let operasi = angkasatu + angkadua; 
        frm.hasil.value = operasi;
    }
}
function ngurang(){
    let frm = document.getElementById("formulir");
    let angkasatu = parseInt(frm.a1.value);
    let angkadua = parseInt(frm.a2.value);
    if (isNaN(angkasatu) || angkasatu == '' ){
        alert("Data kosong /bukan angka");
    }
    else if (isNaN(angkadua) || angkadua == '' ){
        alert("Data kosong /bukan angka");
    }
    else {
        let operasi = angkasatu - angkadua; 
        frm.hasil.value = operasi;
    }
}
function ngekali(){
    let frm = document.getElementById("formulir");
    let angkasatu = parseInt(frm.a1.value);
    let angkadua = parseInt(frm.a2.value);
    if (isNaN(angkasatu) || angkasatu == '' ){
        alert("Data kosong /bukan angka");
    }
    else if (isNaN(angkadua) || angkadua == '' ){
        alert("Data kosong /bukan angka");
    }
    else {
        let operasi = angkasatu * angkadua; 
        frm.hasil.value = operasi;
    }
}
function ngebagi(){
    let frm = document.getElementById("formulir");
    let angkasatu = parseInt(frm.a1.value);
    let angkadua = parseInt(frm.a2.value);
    if (isNaN(angkasatu) || angkasatu == '' ){
        alert("Data kosong /bukan angka");
    }
    else if (isNaN(angkadua) || angkadua == '' ){
        alert("Data kosong /bukan angka");
    }
    else {
        let operasi = angkasatu / angkadua; 
        frm.hasil.value = operasi;
    }
}
function mangkat(){
    let frm = document.getElementById("formulir");
    let angkasatu = parseInt(frm.a1.value);
    let angkadua = parseInt(frm.a2.value);
    if (isNaN(angkasatu) || angkasatu == '' ){
        alert("Data kosong /bukan angka");
    }
    else if (isNaN(angkadua) || angkadua == '' ){
        alert("Data kosong /bukan angka");
    }
    else {
        let operasi = angkasatu ** angkadua; 
        frm.hasil.value = operasi;
    }
}

function kosongin(){
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

