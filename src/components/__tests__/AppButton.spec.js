import AppButton from "../AppButton.vue";
import { mount } from "@vue/test-utils";


describe('AppButton.vue', () => {
    // --------------------------------------------------
    // setup:
    // --------------------------------------------------
    let wrapper;

    let wrapperOptions = {
        // default props:
        propsData: {
            color: 'blue',
            shape: 'default'
        }
    };

    beforeEach(() => {
        wrapper = mount(AppButton, wrapperOptions);
    });

    // --------------------------------------------------
    // tests:
    // --------------------------------------------------
    it('has the correct markup', () => {
        expect(wrapper.html().toLowerCase()).toContain('<button');
    });

    it('has correct CSS class when the `color` prop is set', () => {
        expect(wrapper.classes()).toContain('app-button--blue');

        wrapper.setProps({ color: 'white'});

        expect(wrapper.classes()).toContain('app-button--white');
        expect(wrapper.classes()).not.toContain('app-button--blue');
    });

    it('has correct CSS class when the `shape` prop is set', () => {
        expect(wrapper.classes()).toContain('app-button--default');

        wrapper.setProps({ shape: 'rounded' });

        expect(wrapper.classes()).toContain('app-button--rounded');
        expect(wrapper.classes()).not.toContain('app-button--default');
    });


    it('emits the `click` event when clicked', () => {
        wrapper.trigger('click');

        expect(wrapper.emitted().click).toBeTruthy();
    });
});
