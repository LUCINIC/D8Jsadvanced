


  const productList = document.getElementById('product-list');

  
  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert('Prodotto eliminato correttamente!');
      } else {
        alert('Si è verificato un errore durante l\'eliminazione del prodotto');
      }
    } catch (error) {
      console.error(error);
      alert('Si è verificato un errore durante la chiamata API');
    }
  };

  
  const createProductListItem = (product) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${product.name}</span>
      <button class="btn btn-danger btn-sm float-right" onClick="deleteProduct('${product._id}')">Elimina</button>
    `;
    return listItem;
  };

  
  fetch('https://striveschool-api.herokuapp.com/api/product/')
    .then(response => response.json())
    .then(products => {
      const productListItems = products.map(product => createProductListItem(product));
      productList.append(...productListItems);
    })
    .catch(error => {
      console.error(error);
      alert('Si è verificato un errore durante la chiamata API');
    }); 


    async function getToken(username, password) {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      return data.access_token;
    }
  
    async function makeRequest(url, token) {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data;
    }
    
    
    async function getProductList() {
      const username = 'username';
      const password = 'password';
      const token = await getToken(username, password);
      const products = await makeRequest('https://striveschool-api.herokuapp.com/api/product/', token);
      return products;
    }
   


    
    
