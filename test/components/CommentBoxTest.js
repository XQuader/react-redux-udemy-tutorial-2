import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has correct class', () => {
        expect(component).has.class('comment-box');
    });

    it('has textarea', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('clears the input on submit', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});