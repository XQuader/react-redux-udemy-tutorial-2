import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {

    it('has correct class', () => {
        const component = renderComponent(CommentBox);

        expect(component).has.class('comment-box');
    });

    it('has textarea', () => {
        const component = renderComponent(CommentBox);

        expect(component.find('textarea')).to.exist;
    });

    it('has button', () => {
        const component = renderComponent(CommentBox);

        expect(component.find('button')).to.exist;
    });

    it('entered text updates component', () => {

    });
});