export default{
  title: 'Species Image',
  name: 'speciesImage',
  type: 'object',
  fields: [
    //
    // === Meta ===
    //

    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text'
        }
      ],
    },
    {
      name: 'credit',
      title: 'Credit',
      type: 'basicText'
    }
  ]
}