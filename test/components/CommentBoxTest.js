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

    it('entered text updates component', () => {

    });
});