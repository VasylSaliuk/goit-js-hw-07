const menuItemsByTagName = document.querySelectorAll('.item');
// console.log(menuItemsByTagName);

console.log(`В списке ${menuItemsByTagName.length} категории`);

menuItemsByTagName.forEach(menuItem => console.log(`Категория: ${menuItem.firstElementChild.textContent}\nКоличество элементов: ${menuItem.lastElementChild.children.length}`));


