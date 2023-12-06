const dbUrl = 'http://localhost:8088';

const getAdmin = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/admin`, {
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
  .then((adminData) => resolve(adminData)) // If your endpoint returns a single admin object
  .catch((error) => {
    console.error('Error fetching admin:', error);
    reject(error);
  });
});

export default getAdmin;
