import FirstAction from '../../actions/FirstAction';
import { trialType } from '../../actions/types';

describe('test first action', () => {
  it('it should return ', () => {
    const result = FirstAction();
    expect(result).toEqual({
      type: trialType.INIT,
      message: 'come on',
    });
  });
});
