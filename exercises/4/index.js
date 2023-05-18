// document.querySelectorAll('li').className = "corgitype";  
// incorrect attempt? recheck with below help!!!

// Exercise 4: Change the class of the lis to be "corgi" assistance from Curtis Roy
// const liElements = document.querySelectorAll('li.dog');
// liElements.forEach(li => {
    // li.classList.remove('dog');
    // li.classList.add('corgi');
// });
// const liElements = document.querySelectorAll('li');
// liElements.forEach(li => {
    // li.classList.replace('dog', 'corgi');
//});


//  Help from Curtis

document.querySelectorAll('li.dog').forEach(li => {
    li.classList.remove('dog');
    li.classList.add('corgi')
});    