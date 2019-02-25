import TheCarousel from "../TheCarousel.vue";
import { mount } from "@vue/test-utils";


describe('TheCarousel.vue', () => {
    // --------------------------------------------------
    // setup:
    // --------------------------------------------------
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TheCarousel);
    });

    // --------------------------------------------------
    // tests:
    // --------------------------------------------------

    it('defaults to the `currentSlideIndex` of 0', () => {
        expect(wrapper.vm.currentSlideIndex).toBe(0);
    });

    it('sets correct `transitionName` when the back arrow is clicked', () => {
        expect(wrapper.vm.transitionName).toBe('');
        wrapper.find('.carousel__arrow--prev').trigger('click');
        expect(wrapper.vm.transitionName).toBe('slide-prev');
    });

    it('sets correct `transitionName` when the next arrow is clicked', () => {
        expect(wrapper.vm.transitionName).toBe('');
        wrapper.find('.carousel__arrow--next').trigger('click');
        expect(wrapper.vm.transitionName).toBe('slide-next');
    });

    it("sets the `currentSlideIndex` to the last index of slides list if it's 0 and the previous arrow is clicked", () => {
        const lastIndexInList = wrapper.vm.slides.length - 1;

        expect(wrapper.vm.currentSlideIndex).toBe(0);
        wrapper.find('.carousel__arrow--prev').trigger('click');
        expect(wrapper.vm.currentSlideIndex).toBe(lastIndexInList);
    });

    it("sets the `currentSlideIndex` to the first index (0) of slides list it's the last index of list and the next arrow is clicked", () => {
        const lastIndexInList = wrapper.vm.slides.length - 1;
        wrapper.setData({ currentSlideIndex: lastIndexInList });

        expect(wrapper.vm.currentSlideIndex).toBe(lastIndexInList);
        wrapper.find('.carousel__arrow--next').trigger('click');
        expect(wrapper.vm.currentSlideIndex).toBe(0);
    });
});
