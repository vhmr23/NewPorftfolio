import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
    }),
    defineField({
      name: 'tecnologies',
      title: ' Tecnologies',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'skills'} }]
    }),
    defineField({
      name: 'linktobuild',
      title: 'Link to build',
      type: 'url',
    }),
  ],

})
