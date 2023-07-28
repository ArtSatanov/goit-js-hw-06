const categoriesCount = document.querySelectorAll(".item");
console.log('Number of categories:' + categoriesCount.length);

const categoriesName = document.querySelectorAll("h2");
categoriesName.forEach(element => console.log(element.textContent));