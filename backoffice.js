
const getProducts = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/product/%22"); 
  try {
    if (response.ok) {
      const products = await response.json();
      return products;
    } 
  }
  catch(err) {
    console.error("Errore nel recupero dei prodotti:", response.status);
    return [];
  }
};
  
  
  const addProduct = async (product) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      const newProduct = await response.json();
      console.log("Nuovo prodotto aggiunto:", newProduct);
      return newProduct;
    } else {
      console.error("Errore nell'aggiunta del prodotto:", response.status);
      return null;
    }
  };
  
 
  const updateProduct = async (productId, updates) => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (response.ok) {
      const updatedProduct = await response.json();
      console.log("Prodotto aggiornato:", updatedProduct);
      return updatedProduct;
    } else {
      console.error("Errore nell'aggiornamento del prodotto:", response.status);
      return null;
    }
  };
  
  
  const deleteProduct = async (productId) => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Prodotto eliminato con successo");
      return true;
    } else {
      console.error("Errore nell'eliminazione del prodotto:", response.status);
      return false;
    }
  };
  



