import fetch from 'isomorphic-fetch';

const transformUrl = (url) => {
  const key = url.match(/\w+\//)[0];
  const rest = url.substring(url.indexOf(key) + key.length);

  switch (key) {
    case 'db/': return `https://api.themoviedb.org/3/${rest}`;
    default: return `http://localhost:8080${url}`;
  }
};

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

const objToUrlParams = (obj) => {
  let paramsObj = {};

  if (obj) {
    paramsObj = obj;
  }

  paramsObj.language = 'en-US';
  paramsObj.api_key = '83a3bbabf007433f832172aaa0e90f51';

  return `?${Object.keys(paramsObj).map(prop => `${encodeURIComponent(prop)}=${encodeURIComponent(paramsObj[prop])}`).join('&')}`;
};

const json = response => response.json();

function get(path, data) {
  return fetch(transformUrl(path) + objToUrlParams(data), {
    method: 'GET',
    mode: 'cors',
  })
    .then(status)
    .then(json);
}

function post(path, data) {
  return fetch(transformUrl(path), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
    .then(status)
    .then(json);
}

function put(path, data) {
  return fetch(transformUrl(path), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
    .then(status)
    .then(json);
}

function deleteFetch(path, data) {
  return fetch(transformUrl(path) + objToUrlParams(data), {
    method: 'DELETE',
    credentials: 'include',
  })
    .then(status)
    .then(json);
}

export default {
  get,
  post,
  put,
  delete: deleteFetch,
};
