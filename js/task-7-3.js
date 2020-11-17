const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const insertGallery = document.querySelector('#gallery');
  
  insertGallery.classList.add("inline-flex");

  function createListGallery(array, place) {
    const arrayItems = array.map((obj) => {
      let li = `<li class="list-item"><img src="${obj.url}" alt="${obj.alt}" width="300"></li>`
      return li;
    });

    const ul = `<ul>${arrayItems.join('')}</ul>`
    place.insertAdjacentHTML("afterbegin", ul);
    return ul;
}
console.log(createListGallery(images, insertGallery));