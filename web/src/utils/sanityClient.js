const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wifnobmf',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  // token:
});
