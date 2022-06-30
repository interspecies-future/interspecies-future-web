export default{
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    //
    // === Meta ===
    //

    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
    },

    //
    // === Opengraph ===
    //
    {
      name: 'openGraphTitle',
      title: 'OpenGraph Title',
      type: 'string',
    },
    {
      name: 'openGraphDescription',
      title: 'OpenGraph Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'openGraphImage',
      title: 'OpenGraph Image',
      type: 'image',
      description: 'Recommended size is 1200x630. No larger than 1mb.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text'
        }
      ],
    }
  ]
}