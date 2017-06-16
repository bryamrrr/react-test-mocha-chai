import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknow type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceOf(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'New comment',
    }
    expect(commentReducer([], action).length).to.equal(1);
    expect(commentReducer([], action)).to.eql(['New comment']);
  });
});