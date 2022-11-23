export const apiUrl =
  'https://to-do-woman-up-default-rtdb.firebaseio.com/todos.json';

export const fetchData = async (callback, options, url = apiUrl) => {
  const response = await fetch(
    url,
    options
      ? {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          ...options,
        }
      : {}
  );

  const data = await response.json();

  callback(data);
};

export const sendItem = async (data) => {
  console.log(data);
};

export const getData = async (data) => {
  const loadedData = [];

  for (let key in data) {
    loadedData.push({ id: key, ...data[key] });
  }

  return loadedData;
};

export const editItem = async (apiUrl, body) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  console.log(response);
  console.log(body);
};

export const deleteItem = async (apiUrl, body) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  console.log(response);
};
