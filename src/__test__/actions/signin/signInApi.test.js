import mockAxios from 'axios';
import { signIn } from '../../../actions/siginInActions/signInApi';
import 'regenerator-runtime/runtime';
import { user, data, errors } from '../../mock/data';

jest.mock('axios');

it('should call the signin function and return data', async () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data,
  }));

  return signIn(user).then((response) => {
    expect(response).toEqual({ data });
  });
});

it('should call the signin function and return an error', async () => {
  mockAxios.post.mockImplementationOnce(() => Promise.reject(
    errors,
  ));

  const userdata = {
    email: '',
    password: '',
  };

  return signIn(userdata).catch((response) => {
    expect(response).toEqual(errors);
  });
});
