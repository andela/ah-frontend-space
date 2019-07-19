import moxios from 'moxios';
import { resetPassword } from '../../../actions/passwordResetActions/passwordResetApi';

describe('test the confirmEmail thunk', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the resetPassword method sucessfully', () => {
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 200,
        data: {
          message: 'successfully reset passewrd',
        },
      });
    });
    const resetData = {
      user: {
        passowrd1: 'Enter123',
        passowrd2: 'Enter123',
      },
      location: {
        search:
          '?uuid=YmVud2lsbDIwMTRAZ21haWwuY29t&token=586-46c49b955d04e07b8598',
      },
    };
    return resetPassword(resetData).then((response) => {
      expect(response.status).toEqual(200);
    });
  });
});
