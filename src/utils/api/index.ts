export function users () {
  return fetch('https://gorest.co.in/public/v2/users')
    .then(res => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        return error;
      }
    )
}
