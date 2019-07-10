import { trialType } from '../../actions/types';
import indexReducer from '../../reducers/indexReducer';

const state = {};
const data = {
  message: 'yeah baby',
};
describe('test index reducer', () => {
  it('it tests the reducer is called', () => {
    const newstate = indexReducer(state, {});
    expect(newstate).toEqual(state);
  });

  it('it should change state', () => {
    const newstate = indexReducer(state, {
      type: trialType.INIT,
      payload: data,
    });
    expect(newstate).toEqual({
      ...state,
      message: {
        message: 'yeah baby',
      },
    });
  });
});
