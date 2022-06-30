const client = require('../utils/sanityClient.js')
const groq = require('groq')

const request = groq`
*[_type == 'siteSettings']{
  seo{
    ...,
    openGraphImage{
      ...asset->
    }
  },
  ...
}[0]`

module.exports = async function() {
  const data = await client.fetch(request)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }).then()
  return data
}