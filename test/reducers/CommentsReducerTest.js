import {expect} from '../test_helper';
import CommentReducer from '../../src/reducers/CommentsReducer';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        expect(CommentReducer([], {})).to.eql([]);
    });

    it('handles action with type SAVE_COMMENT', () => {
        const action = {
            type: SAVE_COMMENT,
            payload: 'new comment'
        };

        expect(CommentReducer([], action)).to.eql(['new comment']);
    });
});

