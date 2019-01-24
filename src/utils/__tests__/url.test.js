import { Params, getParam, getSection } from '../url';

test('test url params', () => {
  const params = new Params();

  expect(params.toString()).toBe('');

  params.add({ param1: 'value1', param2: 'value2' });

  expect(params.toString()).toBe('?param1=value1&param2=value2');

  params.remove(['param1']);

  expect(params.toString()).toBe('?param2=value2');

  expect(getParam('view')).toBeUndefined();
  expect(getSection()).toBe('/');

  window.history.pushState({}, 'test', '/genre/43?movie=34234&view=list&param=&param2');

  expect(getParam('view')).toBe('list');
  expect(getParam('movie')).toBe('34234');
  expect(getParam('param')).toBe('');
  expect(getParam('param2')).toBeUndefined();
  expect(getSection()).toBe('/genre/43');
  expect(getSection(true)).toBe('/genre');
});
