// My attempt
// const element = document.querySelector('li.corgi');
// element.classList.add('-queen');
// console.log(element.className);
// <div class="corgi-queen"></div>

//  Help from Curtis

document.querySelectorAll('li.dog').forEach(li => {
    li.classList.remove('dog');
    li.classList.add('corgi')
});