// schemas/aboutModal.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutModal',
  title: 'About Modal',
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
