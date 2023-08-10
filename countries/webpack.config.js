const path = require("path");

module.exports = {
  // ... other webpack configuration ...

  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
};
