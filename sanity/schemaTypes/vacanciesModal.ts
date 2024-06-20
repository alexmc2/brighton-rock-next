// schemas/cooperativeModal.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vacanciesModal',
  title: 'Vacancies Modal',
  type: 'document',
  fields: [
    defineField({
      name: 'modalTitle',
      title: 'Modal Title',
      type: 'string',
    }),
    defineField({
      name: 'modalContent',
      title: 'Modal Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
