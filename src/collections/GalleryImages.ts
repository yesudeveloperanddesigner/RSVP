import type { CollectionConfig } from 'payload'

export const GalleryImages: CollectionConfig = {
  slug: 'gallery-images',
  admin: {
    useAsTitle: 'caption',
    defaultColumns: ['caption', 'imageUrl', 'order', 'createdAt'],
    group: 'Wedding',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'imageUrl',
      type: 'text',
      required: true,
      label: 'Image',
      admin: {
        components: {
          Field: '/components/GalleryImageUpload',
        },
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
  timestamps: true,
}
