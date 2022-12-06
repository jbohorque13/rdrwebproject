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

interface IPageInput {
  current_page: number;
  page_size: number;
};


export function leaderships (pageInput: IPageInput, lastEvaluatedKey?: any) {
  if (lastEvaluatedKey) {
    pageInput = Object.assign(pageInput, lastEvaluatedKey)
  }
  return fetch('https://czcn4ihigg.execute-api.us-east-1.amazonaws.com/test/paginate_leadership', {
    method: 'POST',
    body: JSON.stringify(pageInput),
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

export function getPersonsPreached (pageInput: IPageInput) {
  return fetch('https://czcn4ihigg.execute-api.us-east-1.amazonaws.com/test/paginate_persons_preached', {
    method: 'POST',
    body: JSON.stringify(pageInput),
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