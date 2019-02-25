import { shallowMount } from '@vue/test-utils';
import TheInfoFooter from '../TheInfoFooter.vue';



describe('TheInfoFooter.vue', () => {
    // -------------------- setup: --------------------
    let shallowWrapper;

    beforeEach(() => {
        shallowWrapper = shallowMount(TheInfoFooter);
    });

    // -------------------- tests: --------------------
    it('has correct markup', () => {
        expect(shallowWrapper.html()).toContain('<footer');
    });

    it('renders the correct text', () => {
        expect(shallowWrapper.html()).toContain('About Habitat');
        expect(shallowWrapper.html()).toContain('Habitat sites are demonstration sites for the Sitecore® Experience Platform™');
    });

    it('renders eva-icons', () => {
        expect(shallowWrapper.html()).toContain('eva-icon');
    });
});
