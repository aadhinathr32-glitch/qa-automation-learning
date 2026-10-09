
const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getUser(request, userId) {
  return await request.get(`${BASE_URL}/users/${userId}`);
}

async function createUser(request, userData) {
  return await request.post(`${BASE_URL}/users`, {
    data: userData
  });
}

async function updateUser(request, userId, userData) {
  return await request.put(`${BASE_URL}/users/${userId}`, {
    data: userData
  });
}

async function deleteUser(request, userId) {
  return await request.delete(`${BASE_URL}/users/${userId}`);
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
};
