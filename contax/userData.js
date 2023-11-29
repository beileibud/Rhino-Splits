const getUsers = () => new Promise((resolve, reject) => {
    fetch('http://localhost:8088/users', { // Note the '/' at the beginning to start from the root
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
  
  export default getUsers;
  