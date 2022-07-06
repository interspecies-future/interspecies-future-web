const client = require('../utils/sanityClient.js')
const groq = require('groq')

const request = groq`
*[_type == 'homepage']{
    title,
    intro,
    speciesSlides[]{
      title,
      credit,
      image{
        ...asset->,
        alt
      }
    },
    footer[]{
      ...
    },
    copyright
}[0]`

module.exports = async function() {
  const homeData = await client.fetch(request)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }).then()
  return homeData
}