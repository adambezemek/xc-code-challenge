module.exports = {
  plugins: {
    autoprefixer: {},
    // Details: Ensure values are ordered consistently in the css. - https://github.com/ben-eb/postcss-ordered-values
    // Support: Performance - GZIP
    // Additional Details: Doing so should help gzip as it will help create a more consistent pattern.
    "postcss-ordered-values": {},
  }
}
