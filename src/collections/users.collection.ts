import { Access, CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  // auth: true,
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<p>Hello pls verify email</p>`
      }
    }
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      defaultValue: 'user',
      required: true,
      //   admin: {
      //     condition: () => false
      //   },
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
    },
  ],
};
