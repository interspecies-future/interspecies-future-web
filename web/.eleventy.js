const pt = require('@portabletext/to-html')
const sanityClient = require('./src/utils/sanityClient.js')
const imageUrl = require('@sanity/image-url')
const imageBuilder = imageUrl(sanityClient);
const imgShortCode = require("./src/utils/imgshortcode.js");

module.exports = function(eleventyConfig) {

  // netlify redirects file to dist
  eleventyConfig.addPassthroughCopy('_redirects');

  // Reload the page every time any JS/CSS files are changed.
  eleventyConfig.setBrowserSyncConfig({
    files: [
      'dist/styles/index.css',
      'dist/scripts/index.js',
    ]
  });

  eleventyConfig.addPassthroughCopy({'src/images': 'images'});
  eleventyConfig.addPassthroughCopy({'src/favicon': '/'});
  eleventyConfig.addPassthroughCopy({'src/fonts': 'assets/fonts'});


  eleventyConfig.addFilter( 'debug', (value) => {
    return `<pre style="padding: 1em; outline: 1px solid black; font: 12px monospace;">
      ${JSON.stringify(
        value,
        undefined,
        2,
      )}
    </pre>`
  })

  eleventyConfig.addFilter('richText', (data) => {
    return pt.toHTML(data, {
      components: {
        marks: {
          link: ({children, value}) => {
            const href = value.href || '';
            if (pt.uriLooksSafe(href)) {
              const rel = href.startsWith('/') ? undefined : 'noreferrer noopener'
              if(value.blank){
                return `<a href="${href}" target="_blank" rel="noopener noreferrer">${children}</a>`
              }else{
                return `<a href="${href}" rel="${rel}">${children}</a>`
              }
            }
          }
        }
      }
    })
  });

  eleventyConfig.addFilter("formatDate", (dateObj, format = "LLL dd yyyy") => {
    return DateTime.fromHTTP(dateObj, {zone: 'utc'}).toFormat(format);
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("trim", (array, start, end) => {
    return array.slice(start, end);
  });

  // https://github.com/11ty/eleventy-img
  eleventyConfig.addNunjucksAsyncShortcode("image", imgShortCode);

  eleventyConfig.addShortcode('imageUrl', (source, width = 1200, saturation) => {
    return imageBuilder
      .image(source)
      .width(width)
      .saturation(saturation)
      .auto('format')
      .url()
  })

  return {
    dir: {
      input: 'src/templates',
      includes: './components',
      layouts: './layouts',
      data: '../data',
      output: 'dist'
    }
  }

}