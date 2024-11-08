;(function () {
  async function init() {
    const products = await fetchProducts()
    const productListItems = products.map(p => createProductListItems(p))
    productListContainer = document.querySelector('.products')
    productListItems.forEach(item => {
      setDragEvents(item)
      productListContainer.appendChild(item)
    })
  }

  function setDragEvents(item) {
    item.addEventListener('dragstart', handleDragStart)
    item.addEventListener('dragover', handleDragOver)
    item.addEventListener('dragenter', handleDragEnter)
    item.addEventListener('dragleave', handleDragLeave)
    item.addEventListener('drop', handleDrop)
    item.addEventListener('dragend', handleDragEnd)
  }

  init()
})()

// {
//     "id": 8,
//     "title": "Classic Red Jogger Sweatpants",
//     "price": 98,
//     "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
//     "images": [
//         "[\"https://i.imgur.com/9LFjwpI.jpeg\"]"
//     ],
//     "creationAt": "2024-11-08T01:26:19.000Z",
//     "updatedAt": "2024-11-08T05:33:33.000Z",
//     "category": {
//         "id": 1,
//         "name": "Clothes",
//         "image": "https://world.openfoodfacts.org/data",
//         "creationAt": "2024-11-08T01:26:19.000Z",
//         "updatedAt": "2024-11-08T05:14:49.000Z"
//     }
// }
