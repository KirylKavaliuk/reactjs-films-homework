//  change for simple object. add getSection func.

const parseParams = () => {
  const pairs = document.location.search.substring(1).split('&');

  return pairs.reduce((acc, pair) => {
    const param = pair.split('=');

    return Object.assign(acc, param[0] ? { [param[0]]: param[1] } : {});
  }, {});
};

export const getSection = (first = false) => {
  const { pathname } = document.location;
  const section = pathname.match(/\/[a-zA-Z0-9-]*(?=\/)?/);

  return first ? section && section[0] : pathname;
};

export const getParam = (key) => {
  const params = parseParams();

  return params[key];
};

export class Params {
  constructor() {
    this.params = parseParams();
  }

  add(addparams) {
    Object.keys(addparams).forEach((key) => { this.params[key] = addparams[key]; });

    return this;
  }

  remove(removeParams) {
    removeParams.forEach((key) => { this.params[key] = undefined; });

    return this;
  }

  toString() {
    const params = Object
      .keys(this.params)
      .reduce((acc, key) => {
        const value = this.params[key];

        return acc.concat(value ? `${key}=${value}` : null);
      }, [])
      .filter(param => param);

    return `${params.length ? `?${params.join('&')}` : ''}`;
  }
}
