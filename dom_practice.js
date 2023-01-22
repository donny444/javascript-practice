// EXAMINE THE DOCUMENT OBJECT
console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.all)
console.log(document.forms)
console.log(document.links)
console.log(document.images)

// GETELEMENTBYID
console.log(document.getElementById('topic'));
var headerTitle = document.getElementById('topic');
console.log(headerTitle)

// GETELEMENTBYCLASSNAME
console.log(document.getElementsByClassName('head'))

// INNERHTML
let myElement = document.getElementById('test')
console.log(myElement)
myElement.innerHTML = 'INNERHTML TEST'
document.querySelector('.fr-list:last-child').innerHTML = 'Stay conciously'

// QUERYSELECTOR
var header = document.querySelector('#topic')
header.style.borderBottom = 'solid 4px #000'