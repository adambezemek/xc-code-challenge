module.exports = {
  plugins: {
    autoprefixer: {},
    // Details: Ensure values are ordered consistently in the css. - https://github.com/ben-eb/postcss-ordered-values
    // Support: Performance - GZIP
    // Additional Details: Doing so should help gzip as it will help create a more consistent pattern.
    "postcss-ordered-values": {},

    // Details: Sort CSS Properties as defined by `postcssSortingPropertiesOrder`. - https://github.com/hudochenkov/postcss-sorting
    // Additional Details: Doing so should help gzip as it will help create a more consistent pattern.
    // Support: Performance - GZIP
    "postcss-sorting": require("./postcss-sorting.json"),

    "cssnano":
    {
      safe: true,
      discardComments: {
          removeAll: true
      },
      normalizeCharset: true,
    }

  }
}
