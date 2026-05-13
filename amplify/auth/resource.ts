import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: 'CODE',
      verificationEmailSubject: 'Verify your email — Fernando Camacho Portal',
      verificationEmailBody: (createCode) =>
        `Your verification code is: ${createCode()}`,
    },
  },
  groups: ['Admin'],
  multifactor: {
    mode: 'OPTIONAL',
    totp: true,
  },
});
