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

export function leaderships () {
  return fetch('https://czcn4ihigg.execute-api.us-east-1.amazonaws.com/test/paginate_leadership', {
    method: 'POST',
    body: JSON.stringify({
      "current_page": 1,
      "page_size": 8
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        return error;
      }
    );
}