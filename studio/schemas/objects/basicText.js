export default {
  name: 'basicText',
  title: 'Block basic link options',
  type: 'array',
  of: [{
    type: 'block',
    title: 'Block',
    styles: [
      {title: 'Normal', value: 'normal'},
    ],
    marks: {
      decorators: [
        {title: 'Strong', value: 'strong'},
        {title: 'Emphasis', value: 'em'},
        {title: 'Underline', value: 'underline'},
        {title: 'Strikethrough', value: 'strike-through'},
      ],
      annotations: [
        {
          name: 'link',
          type: 'object',
          title: 'URL',
          fields: [
            {
              title: 'URL',
              name: 'href',
              type: 'url',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              }),
            },
            {
              title: 'Open in new window',
              name: 'blank',
              type: 'boolean'
            }
          ]
        },
      ]
    }
  }],
}
