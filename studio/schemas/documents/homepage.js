export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: [/*'create', 'delete',*/ 'update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'basicText',
    },
    {
      name: 'speciesSlides',
      title: 'Species Slides',
      type: 'array',
      of: [{type: "speciesImage"}]
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'array',
      of: [{
        title: 'Section',
        name: 'section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Section Title',
            type: 'string',
          },
          {
            name: 'text',
            title: 'Text',
            type: 'basicText',
          }
        ]
      }]
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    },
  ]
}