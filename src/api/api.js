import * as DateJS from 'datejs';

export const apiUrl = 'https://to-do-woman-up-default-rtdb.firebaseio.com';

export const TO_DO_STATUS = {
  IN_PROGRESS: 'in progress',
  COMPLETED: 'completed',
  EXPIRED: 'expired',
};

/**
 * Sends a request to the backend
 * @async
 * @param {*} options
 * @param {String} url
 * @returns {*} response data
 */
export const sendHttpRequest = async (
  options,
  url = `${apiUrl}/todos.json`
) => {
  const method = options?.method;
  const body = options?.body;

  const response = await fetch(
    url,
    options
      ? {
          method: method || 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body || {}),
        }
      : {}
  );

  return await response.json();
};

/**
 * Create a to-do
 * @async
 * @param {*} body
 * @return {Array} modified list of todos
 */
export const sendItem = async (body) => {
  const data = await sendHttpRequest({ body });

  return await getData();
};

/**
 * Read all todos
 * @async
 * @returns {Array} modified list of todos
 */
export const getData = async () => {
  const data = await sendHttpRequest();

  const loadedData = [];

  for (let key in data) {
    let isExpired = false;

    if (data[key].status === TO_DO_STATUS.IN_PROGRESS) {
      isExpired = await taskStatusCheck(key, data[key].expiryDate);
    }

    let loadedFiles = [];

    for (let key2 in data[key].files) {
      loadedFiles.push({ id: key, name: data[key].files[key2] }.name);
    }

    loadedData.push({
      id: key,
      description: '',
      ...data[key],
      status: isExpired ? TO_DO_STATUS.EXPIRED : data[key].status,
      files: loadedFiles,
    });
  }

  return loadedData;
};

/**
 * Update one todo
 * @async
 * @param {String} id
 * @param {*} body
 * @returns {Array} modified list of todos
 */
export const editItem = async (id, body) => {
  const data = await sendHttpRequest(
    { method: 'PATCH', body },
    `${apiUrl}/todos/${id}.json`
  );

  return await getData();
};

/**
 * Update a status of one todo
 * @async
 * @param {String} id
 * @param {String} status
 */
export const editStatus = async (id, status) => {
  const data = await sendHttpRequest(
    { method: 'PATCH', body: { status } },
    `${apiUrl}/todos/${id}.json`
  );
};

/**
 * Delete one todo
 * @async
 * @param {String} id
 * @returns {Array} modified list of todos
 */
export const deleteItem = async (id) => {
  const data = await sendHttpRequest(
    { method: 'DELETE' },
    `${apiUrl}/todos/${id}.json`
  );

  return await getData();
};

/**
 * Check whether todo status is expired or not
 * @async
 * @param {String} id
 * @param {String} date
 * @returns {Boolean} true if todo is expired
 */
export const taskStatusCheck = async (id, date) => {
  const isExpired = Date.today().compareTo(Date.parse(date)) > 0;

  if (isExpired) {
    await editStatus(id, TO_DO_STATUS.EXPIRED);
  }

  return isExpired;
};
