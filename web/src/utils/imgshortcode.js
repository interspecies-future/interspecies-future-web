const Image = require("@11ty/eleventy-img");

// https://github.com/11ty/eleventy-img
module.exports = async (
  src,
  alt,
  sizes = "(min-width: 30em) 50vw, 100vw",
  className,
  // aspectRatio,
) => {
   let metadata = await Image(src, {
    widths: [300, 600, 1200, 1600, 1800, 2000],
    formats: ["webp", null],
    urlPath: '/images/',
    outputDir: 'dist/images/'
  });

  let imageAttributes = {
    class: className,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
};