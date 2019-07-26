import FirstAction from '../../actions/FirstAction';
import { trialType } from '../../actions/types';
import Index from '../../index';


describe('test first action', () => {
  it('it should return ', () => {
    const result = FirstAction();
    expect(result).toEqual({
      type: trialType.INIT,
      message: 'come on',
    });
  });
});

jest.mock('react-dom', () => ({ render: jest.fn() }));

it('renders without crashing', () => {
  expect(JSON.stringify(
    Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
  )).toMatchSnapshot();
});
