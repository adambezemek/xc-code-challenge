module.exports = {
  css: {
    loaderOptions: {
      // Include global.scss for global styling, variables etc.
      sass: {
        data: `
          @import "@/styles/global.scss";
        `
      }
    }
  }
};
