const withFonts = require("nextjs-fonts");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withFonts(
  withCss(
    withSass(
      withLess({
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      })
    )
  )
);
