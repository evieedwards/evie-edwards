import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteMeta = defineType({
  name: 'site-meta',
  icon: CogIcon,
  title: 'Site Meta',
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
      type: 'text',
    }),
    defineField({
      name: 'og_image',
      title: 'Social card (1200×630)',
      type: 'image',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon (32x32)',
      type: 'image',
    }),
  ],
})
