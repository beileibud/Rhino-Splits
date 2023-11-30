const dbUrl = 'http://localhost:8088';

const getRequests = () => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/requests`, { // Note the '/' at the beginning to start from the root
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

  const getSingleRequest = () => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/requests/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

  const createRequest = (payload) => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/requests`, {
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

  const updateRequest = (payload) => {
    return new Promise((resolve, reject) => {
      fetch(`${dbUrl}/requests/${payload.id}`, {
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

  const deleteSingleRequest = (payload) => new Promise((resolve, reject) => {
    fetch(`${dbUrl}/requests/${payload.id}`, {
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
    getRequests,
    getSingleRequest,
    createRequest,
    updateRequest,
    deleteSingleRequest
  };
