//Uzimanje elemenata iz HTML-a

let input = document.getElementById('todo');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');
let txt = input.value;

// kreiranje funkcije koja omogucava dodavanje elemenata putem dugmeta ADD

btn.addEventListener('click', () => {
    let txt = input.value;
    if(txt === ""){
        alert ('You must write something !');
    }else {
        let li= document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
})


// funkcija koja omogucava da markiramo uradjeni task

list.addEventListener('click', e => {
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
})