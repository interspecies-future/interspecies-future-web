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
  ]
}