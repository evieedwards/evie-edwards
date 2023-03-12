import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Evie Edwards',

  projectId: 'rjqgp0vj',
  dataset: 'v2',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
