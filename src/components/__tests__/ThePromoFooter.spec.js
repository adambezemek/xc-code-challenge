import { shallowMount } from '@vue/test-utils';
import ThePromoFooter from '../ThePromoFooter.vue';



describe('ThePromoFooter.vue', () => {
    // -------------------- setup: --------------------
    let shallowWrapper;

    beforeEach(() => {
        shallowWrapper = shallowMount(ThePromoFooter);
    });

    // -------------------- tests: --------------------
    it('has the correct markup', () => {
        expect(shallowWrapper.html()).toContain('<footer');
    });

    it('renders the correct text', () => {
        expect(shallowWrapper.html()).toContain('Anders Laub Christoffersen');
        expect(shallowWrapper.html()).toContain('Habitat is available as a Sitecore Package and the sourcecode is available on GitHub');
    });

    it('correctly renders the AppButton component', () => {
        expect(shallowWrapper.html()).toContain('<app-button');
    });
});
