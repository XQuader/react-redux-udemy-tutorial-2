import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
    let component, comments;

    beforeEach(() => {
        comments = [
            'first',
            'second',
            'third'
        ];
        component = renderComponent(CommentList, {comments});
    });

    it('has correct class', () => {
        expect(component).has.class('comment-list');
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each comment that is provided', () => {
        comments.forEach(comment => expect(component).to.contain(comment));
    });
});