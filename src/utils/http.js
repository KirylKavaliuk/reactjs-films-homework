import fetch from 'isomorphic-fetch';

const transformUrl = (url) => {
  let tepmUrl = url;

  if (/\?/.test(url)) {
    tepmUrl = url.substring(0, url.indexOf('?'));
  }

  if (/http/.test(tepmUrl)) {
    return tepmUrl;
  }

  if (/db\//.test(tepmUrl)) {
    return `https://api.themoviedb.org/3/${tepmUrl.substring(3)}`;
  }

  return `http://localhost:8080${tepmUrl}`;
};

const objToUrlParams = (obj, path) => {
  let paramsObj = {};

  if (obj) {
    paramsObj = obj;
  }

  if (/db\//.test(path)) {
    paramsObj.language = 'en-US';
    paramsObj.api_key = '83a3bbabf007433f832172aaa0e90f51';
  }

  const strParams = Object
    .keys(paramsObj)
    .map(prop => `${encodeURIComponent(prop)}=${encodeURIComponent(paramsObj[prop])}`)
    .join('&');

  return strParams.length ? `?${strParams}` : '';
};

const json = response => response.json();

function get(path, data) {
  return fetch(transformUrl(path) + objToUrlParams(data, path), {
    method: 'GET',
    mode: 'cors',
  })
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
    .then(json);
}

export default {
  get,
  post,
};
