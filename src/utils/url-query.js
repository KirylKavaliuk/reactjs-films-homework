export default class Query {
  constructor() {
    this.params = this.parseParams();
  }

  parseParams = () => {
    const pairs = document.location.search.substring(1).split('&');

    return pairs.reduce((acc, pair) => {
      const param = pair.split('=');

      return Object.assign(acc, param[0] ? { [param[0]]: param[1] } : {});
    }, {});
  }

  toString = () => {
    let string = '';

    Object.keys(this.params).forEach((param) => {
      if (this.params[param]) {
        string = string.concat(`${param}=${this.params[param]}`);
      }
    });

    return string.length ? `?${string}` : '';
  }

  getParam = (param) => {
    const value = this.params[param];

    return value || '';
  }

  removeParams = (...params) => {
    params.forEach((param) => {
      if (this.params[param]) {
        this.params[param] = undefined;
      }
    });

    return this;
  }
}
