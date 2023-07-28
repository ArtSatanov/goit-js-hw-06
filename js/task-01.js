const categoriesCount = document.querySelectorAll(".item");
console.log('Number of categories:' + categoriesCount.length);

categoriesCount.forEach(element => console.log('Category: ' + element.firstElementChild.textContent + '\n' + 'Elements: ' + element.lastElementChild.children.length));





