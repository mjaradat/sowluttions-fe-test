async function fetchProducts() {
  const url = 'https://fakestoreapi.com/products'
  return new Promise(async (res, rej) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        rej(`Response status: ${response.status}`)
        return
      }

      const json = await response.json()
      res(json)
    } catch (error) {
      console.error(error.message)
      rej(error.message)
    }
  })
}

async function getProduct(id) {
  const url = `https://api.escuelajs.co/api/v1/products/${id}`
  return new Promise(async (res, rej) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        rej(`Response status: ${response.status}`)
        return
      }

      const json = await response.json()
      res(json)
    } catch (error) {
      console.error(error.message)
      rej(error.message)
    }
  })
}
