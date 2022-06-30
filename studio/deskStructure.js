import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Site')
    .items([
      S.documentListItem()
        .title('Content')
        .schemaType('homepage')
        .id('homepage'),
      S.documentListItem()
        .title('Settings')
        .schemaType('siteSettings')
        .id('siteSettings'),
    ])