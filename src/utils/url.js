//  change for simple object. add getSection func.

const parseParams = () => {
  const pairs = document.location.search.substring(1).split('&');

  return pairs.reduce((acc, pair) => {
    const param = pair.split('=');

    return Object.assign(acc, param[0] ? { [param[0]]: param[1] } : {});
  }, {});
};

export const getSection = () => (document.location.pathname);

export const getParam = (key) => {
  const params = parseParams();

  return params[key];
};

export class Params {
  constructor() {
    this.params = parseParams();
  }

  add(params) {
    Object.keys(params).forEach((key) => {
      this.params[key] = params[key];
    });

    return this;
  }

  remove(params) {
    params.forEach((key) => {
      this.params[key] = undefined;
    });

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
