import { shallowMount } from '@vue/test-utils';
import TheHeader from '../TheHeader.vue';



describe('TheHeader.vue', () => {
    // -------------------- setup: --------------------
    let shallowWrapper;

    beforeEach(() => {
        shallowWrapper = shallowMount(TheHeader);
    });

    // -------------------- tests: --------------------
    it('renders the correct markup', () => {
        expect(shallowWrapper.html()).toContain('<header');
        expect(shallowWrapper.html()).toContain('<nav');
    });

    it('renders eva-icons', () => {
        expect(shallowWrapper.html()).toContain('eva-icon');
    });
});
