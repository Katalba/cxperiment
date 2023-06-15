export const useFetchForm = async (email, objetoMsj) => {
  const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(objetoMsj)
  })

  const data = await response.json()
  return (data)

  // fetch(`https://formsubmit.co/ajax/${email}`, {

  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.log(error))
}
