export async function fetchTutorials () {
    const endpoint = new URL('https://xhfg2kwb25.execute-api.us-east-2.amazonaws.com/prod')
  
    return await fetch(endpoint,
        {mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'application/json',
        }
        })
      .then((res) => res.json())
        .catch(error => {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        })
  }