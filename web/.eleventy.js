const blocksToHtml = require('@sanity/block-content-to-html')
const sanityClient = require('./src/utils/sanityClient.js')
const imageUrl = require('@sanity/image-url')
const imageBuilder = imageUrl(sanityClient);


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
  // eleventyConfig.addPassthroughCopy({'src/fonts': 'assets/fonts'});


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
    let html = blocksToHtml({
      blocks: data
    })
    // remove wrapper div
    if (html.startsWith('<div>')) {
      return html.slice(5).slice(0, -6);
    } else {
      return html;
    }
  })

  eleventyConfig.addFilter("formatDate", (dateObj, format = "LLL dd yyyy") => {
    return DateTime.fromHTTP(dateObj, {zone: 'utc'}).toFormat(format);
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("trim", (array, start, end) => {
    return array.slice(start, end);
  });

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