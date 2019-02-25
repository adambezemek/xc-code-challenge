import { shallowMount, mount } from '@vue/test-utils';
import TheMain from '../TheMain.vue';



describe('TheMain.vue', () => {
    // -------------------- setup: --------------------
    let shallowWrapper;
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TheMain);
        shallowWrapper = shallowMount(TheMain);
    });

    // -------------------- tests: --------------------
    it('renders the correct markup', () => {
        expect(shallowWrapper.html()).toContain('<main');
    });

    it('correctly renders the AppButton component', () => {
        expect(shallowWrapper.html()).toContain('app-card');
    });

    it('renders the correct text', () => {
        expect(wrapper.html()).toContain('The Habitat example implementation has a range of modules which covers the basics of a Sitecore website');
    });
});
