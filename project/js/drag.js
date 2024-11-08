let draggedItem = null
let targetItem = null
let dragEnded = true

function handleDragStart(event) {
  document.querySelector('.products').classList.add('dragging')
  dragEnded = false
  draggedItem = event.target
  draggedItem.classList.add('dragging-item') // dragged item effect
}

function handleDragOver(event) {
  event.preventDefault()
}

function handleDragEnter(event) {
  event.preventDefault()
  targetItem = null
  if (event.target.classList.contains('product-list-item')) {
    targetItem = event.target
  } else if (event.target.parentNode && event.target.parentNode.classList.contains('product-list-item')) {
    targetItem = event.target.parentNode
  }

  if (!targetItem.classList.contains('dragging-item') && targetItem) {
    targetItem.classList.add('target-drop')
  }
}

function handleDragLeave(event) {
  targetItem.classList.remove('target-drop')
}

function handleDrop(event) {
  event.preventDefault()
  if (targetItem !== draggedItem && targetItem.classList.contains('product-list-item')) {
    const parent = document.querySelector('.products')
    const allItems = [...parent.querySelectorAll('.product-list-item')]

    const draggedIndex = allItems.indexOf(draggedItem)
    const targetIndex = allItems.indexOf(targetItem)
    // swap the element
    if (draggedIndex < targetIndex) {
      parent.insertBefore(draggedItem, targetItem.nextSibling) // insert the dragged after target the target (before next target element)
    } else {
      parent.insertBefore(draggedItem, targetItem)
    }
  }
}

function handleDragEnd() {
  const products = document.querySelector('.products')
  const allItems = products.querySelectorAll('.product-list-item')

  products.classList.remove('dragging')
  draggedItem.classList.remove('dragging-item')
  allItems.forEach(item => item.classList.remove('target-drop'))
  draggedItem = null
  targetItem = null
  dragEnded = true
}
