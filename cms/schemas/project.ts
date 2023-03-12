import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export const project = defineType({
  icon: BookIcon,
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation(rule) {
        return rule.required()
      },
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Date',
      validation(rule) {
        return rule.required()
      },
    }),
    defineField({
      name: 'medium',
      type: 'string',
      title: 'Medium',
      validation(rule) {
        return rule.required()
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }),
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
})
