import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'JobImage',
      title: 'Job image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'companyTitle',
      title: 'CompanyTitle',
      type: 'string',
    }),
    defineField({
      name: 'dateStared',
      title: 'Date Stared',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'Is Currently Working Here',
      type: 'boolean',
    }),
    defineField({
      name: 'tecnologies',
      title: ' Tecnologies',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'skills'} }]
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string'}]
    }),
  ],

})
