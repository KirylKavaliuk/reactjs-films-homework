import http from '../http';

test('test requests', async () => {
  let response = null;

  response = await http.get('https://reqres.in/api/users/2');

  const { data } = response;

  expect(data.id).toBe(2);

  response = await http.post('https://reqres.in/api/users', {
    name: 'Kirill',
    job: 'wbdvlpr',
  });

  expect(response.id).not.toBeUndefined();
  expect(response.name).toBe('Kirill');

  response = await http.get('db/movie/297802/videos?trtrs=trstrs&twfpwfpwf=pwfpwfptrs');

  expect(response.id).not.toBeUndefined();

  response = await http.get('/echo', {
    text: 'test',
  });

  expect(response.text).toBe('test');
});
