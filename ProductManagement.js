

  function ProductManagement() {
    const products = []
  
    function getAllProducts() {
      return products
    }
  
    function addProduct(product) {
      products.push(product)
    }
  
    function searchByName(name) {
      const results = []
    for (const product of products) {
      if (product.name.toLowerCase().includes(name.toLowerCase())) {
        results.push(product)
      }
    }
    return results
      
    }
  
    function searchByPriceRange(minPrice, maxPrice) {
      const results = []
    for (const product of products) {
      if (product.price >= minPrice && product.price <= maxPrice) {
        results.push(product)
      }
    }
    return results
    }
  
    function removeAll() {
      products.splice(0, products.length)
    }
  
    return {
      getAllProducts,
      addProduct,
      searchByName,
      searchByPriceRange,
      removeAll
    }
  }

  module.exports = ProductManagement
  
  const productCatalog = ProductManagement()
  


// const productCatalog = ProductManagement()

//   function getAllProducts() {}

//   function addProduct(product) {}

//   function searchByName(name) {}

//   function searchByPriceRange(minPrice, maxPrice) {}

//   function removeAll() {}

//   return {
//     removeAll,
//     searchByName,
//     searchByPriceRange,
//     getAllProducts,
//     addProduct
//   }
// }
// module.exports = ProductManagement