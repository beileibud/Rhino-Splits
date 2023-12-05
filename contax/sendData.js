const dbUrl = 'http://localhost:8088';

const getSend = () => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/sends`, { // Note the '/' at the beginning to start from the root
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(Object.values(data)))
    .catch((error) => {
      console.error('Error fetching users:', error);
      reject(error);
    });
  });

  const getSingleSend = (id) => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/sends/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response); // Add this line to log the response object
        if (!response.ok) {
          // You can also log response status and statusText to get more details
          console.error(`HTTP Error: ${response.status} ${response.statusText}`);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      
  });

  const getUserSend = async (userId) => {
    const response = await fetch(`${dbUrl}/sends?userId=${userId}&_sort=id&_order=desc&_limit=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };
  

  const createSend = (payload) => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/sends`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

  const updateSend = (payload) => {
    return new Promise((resolve, reject) => {
      fetch(`${dbUrl}/sends/${payload.id}`, {
        method: 'PATCH', // or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // If successful, return the updated user data
          resolve(data);
        })
        .catch((error) => {
          console.error('Error updating user:', error);
          reject(error);
        });
    });
  };

  const deleteSingleSend = (payload) => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/sends/${payload.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
    
  export {
    getSend,
    getSingleSend,
    getUserSend,
    updateSend,
    createSend,
    deleteSingleSend
  };
