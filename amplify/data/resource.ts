import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Project: a
    .model({
      title:       a.string().required(),
      company:     a.string(),
      description: a.string(),
      date:        a.string(),
      tags:        a.string().array(),
      order:       a.integer(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['read']),
      allow.groups(['Admin']),
    ]),

  Publication: a
    .model({
      authors:  a.string().required(),
      title:    a.string().required(),
      venue:    a.string(),
      year:     a.integer(),
      doi:      a.string(),
      s3PdfKey: a.string(),
      order:    a.integer(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['read']),
      allow.groups(['Admin']),
    ]),

  Experience: a
    .model({
      company:      a.string().required(),
      role:         a.string().required(),
      location:     a.string(),
      startDate:    a.string(),
      endDate:      a.string(),
      description:  a.string(),
      achievements: a.string().array(),
      order:        a.integer(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['read']),
      allow.groups(['Admin']),
    ]),

  Education: a
    .model({
      institution:       a.string().required(),
      degree:            a.string().required(),
      field:             a.string(),
      startYear:         a.integer(),
      endYear:           a.integer(),
      thesis:            a.string(),
      s3DiplomaKey:      a.string(),
      s3DiplomaImageKey: a.string(),
      order:             a.integer(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['read']),
      allow.groups(['Admin']),
    ]),

  Award: a
    .model({
      name:        a.string().required(),
      year:        a.integer(),
      issuer:      a.string(),
      description: a.string(),
      order:       a.integer(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['read']),
      allow.groups(['Admin']),
    ]),

  Contact: a
    .model({
      name:    a.string().required(),
      email:   a.string().required(),
      subject: a.string(),
      message: a.string().required(),
      readAt:  a.datetime(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['create']),
      allow.groups(['Admin']),
    ]),

  SiteSetting: a
    .model({
      key:   a.string().required(),
      value: a.string().required(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['read']),
      allow.groups(['Admin']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
