import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/App';

describe('App testing', () => {

    it('shows the correct text', () => {
        const component = renderComponent(App);

        expect(component).to.contain('React simple starter');
    })
});