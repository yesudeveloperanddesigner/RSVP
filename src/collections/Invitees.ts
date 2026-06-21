import type { CollectionConfig } from 'payload'

export const Invitees: CollectionConfig = {
  slug: 'invitees',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'attending', 'plusOne', 'createdAt'],
    group: 'Wedding',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'attending',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Joyfully Accept', value: 'yes' },
        { label: 'Regretfully Decline', value: 'no' },
        { label: 'Pending', value: 'pending' },
      ],
      label: 'RSVP Status',
    },
    {
      name: 'plusOne',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 5,
      label: 'Plus Ones',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message for the Couple',
      admin: {
        placeholder: 'Share your warm wishes...',
      },
    },
  ],
  timestamps: true,
}
