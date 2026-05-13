import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'fernandocamachoStorage',
  access: (allow) => ({
    'profile-images/*': [
      allow.guest.to(['read']),
      allow.groups(['Admin']).to(['read', 'write', 'delete']),
    ],
    'diplomas/*': [
      allow.guest.to(['read']),
      allow.groups(['Admin']).to(['read', 'write', 'delete']),
    ],
    'publications/*': [
      allow.guest.to(['read']),
      allow.groups(['Admin']).to(['read', 'write', 'delete']),
    ],
  }),
});
