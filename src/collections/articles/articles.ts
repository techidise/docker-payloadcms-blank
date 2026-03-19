import { CalloutBlock } from '@/blocks/calloutBlock'
import { CodeBlock } from '@/blocks/codeBlock'
import { BlocksFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'authors', 'publishedAt', 'status'],
  },
  defaultSort: '-publishedAt',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Meta',
          fields: [
            {
              name: 'authors',
              type: 'relationship',
              relationTo: 'users',
              hasMany: true,
              maxRows: 3,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'category',
                  type: 'relationship',
                  relationTo: 'categories',
                  hasMany: false,
                },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'publishedAt',
              type: 'date',
              admin: {
                date: {
                  displayFormat: 'd. MMMM, yyyy',
                  overrides: {
                    calendarStartDay: 1,
                  },
                },
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'excerpt',
              type: 'textarea',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  HeadingFeature({
                    enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'],
                  }),
                  BlocksFeature({
                    blocks: [CalloutBlock, CodeBlock],
                  }),
                ],
              }),
            },
          ],
        },
      ],
    },
  ],
}
