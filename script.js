const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const dropdown = document.getElementsByClassName('dropdown')
const more = document.getElementsByClassName('more')


burger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
});
const div = dropdown[0].children[0]

Array.prototype.forEach.call(dropdown, element => {
    element.addEventListener('click', (e) =>{
        span = element.children[0].children[1]
        element.classList.toggle('dropdown-active');
        if(span.textContent == '+'){
       
            span.innerHTML = '-';
        }
        else{
            span.innerHTML = '+';
        }
    })
});

