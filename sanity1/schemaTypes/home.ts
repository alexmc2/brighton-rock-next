import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'cooperativeTitle',
      title: 'Co-operative Title',
      type: 'string',
    }),
    defineField({
      name: 'cooperativeContent',
      title: 'Co-operative Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'chibahTitle',
      title: 'Chibah Title',
      type: 'string',
    }),
    defineField({
      name: 'chibahContent',
      title: 'Chibah Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
