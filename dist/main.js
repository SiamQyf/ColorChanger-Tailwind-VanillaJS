'use strict'
let colorbox = document.getElementById('colorbox');
let btn  = document.getElementById('btn');

btn.addEventListener('click', function(){
    colorbox.style.backgroundColor = 
    "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
})

