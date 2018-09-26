export {getUsers}

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError)
}

function validateResponse(response) {
  if (!response.ok) throw Error(response.statusText)
  return response
}

function readResponseAsJSON(response) {
  return response.json()
}

function logError(error) {
  console.error('getUsers', error)
  throw error
}
