import { Block } from 'payload'

const shikiLangs: string[] = []

export const CodeBlock: Block = {
  slug: 'codeblock',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'language',
          type: 'select',
          required: true,
          options: shikiLangs,
          defaultValue: 'ansi',
        },
        {
          name: 'filename',
          type: 'text',
        },
      ],
    },
    {
      name: 'code',
      type: 'code',
      required: true,
    },
  ],
}
