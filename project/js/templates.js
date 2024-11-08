// create any tag with single class and text
function createElement(tag, className, innerText) {
  const element = document.createElement(tag)
  className && element.classList.add(className)
  innerText && (element.innerText = innerText)
  return element
}

// create image tag
function getImageTemplate(src, className, alt) {
  const imgElement = createElement('img', className, alt)
  imgElement.src = src
  imgElement.alt = alt
  return imgElement
}

function createProductListItems(item) {
  const { title, price, image } = item
  const productListItem = createElement('div', 'product-list-item') // product item
  productListItem.setAttribute('draggable', true) // to enable the drag and drop

  // create the details of the item card
  const imgElement = getImageTemplate(image, 'img', title)
  imgElement.setAttribute('draggable', false)
  const titleElement = createElement('p', 'title', title)
  const priceElement = createElement('p', 'price', `Price: $${price}`)
  const dragOverlayElement = createElement('div', 'drag-overlay', '')

  // add details to the product item
  productListItem.appendChild(imgElement)
  productListItem.appendChild(titleElement)
  productListItem.appendChild(priceElement)
  productListItem.appendChild(dragOverlayElement)

  return productListItem
}
