export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [/*'create', 'delete',*/ 'update', 'publish'],
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ]
}
