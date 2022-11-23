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

  return callback(data);
};

export const sendItem = (data) => {
  console.log(data);
};

export const getData = (data) => {
  const loadedData = [];

  for (let key in data) {
    loadedData.push({ id: key, ...data[key] });
  }

  return loadedData;
};

export const editItem = (apiUrl, body) => {
  // console.log(response);
  // console.log(body);
};

export const deleteItem = (apiUrl, body) => {
  // console.log(response);
};
