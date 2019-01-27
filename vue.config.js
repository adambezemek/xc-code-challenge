module.exports = {
  css: {
    loaderOptions: {
      // Include global.scss for global styles, variables etc.
      sass: {
        data: `
          @import "@/styles/global.scss";
        `
      }
    }
  }
};
