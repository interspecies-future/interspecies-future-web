const Image = require("@11ty/eleventy-img");

// https://github.com/11ty/eleventy-img
module.exports = async (
  src,
  alt,
  sizes = "(min-width: 30em) 50vw, 100vw",
  // className,
  // aspectRatio,
) => {
   let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["webp", null],
    urlPath: '/images/',
    outputDir: 'dist/images/'
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
};