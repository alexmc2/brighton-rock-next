// schemas/vacancies.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vacancies',
  title: 'Vacancies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
   
  ],
})
