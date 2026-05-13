# Implementation Plan — Fernando Camacho Portal

## Guiding Principles

- **Simple, not simplistic.** Every piece of code has a clear purpose. No over-engineering, no premature abstractions.
- **Standard architecture.** Follow the same folder structure, naming conventions, and wiring patterns as `propiology_org`. That project is the reference implementation.
- **Amplify Gen 2 only.** All backend resources (auth, data, storage) are defined as TypeScript in `amplify/`. No Gen 1 constructs, no manual AWS Console resource creation.
- **Well-structured.** Separate concerns cleanly: Amplify backend in `amplify/`, React components in `components/`, data helpers in `lib/`, pages in `app/`.
- **Good practices.** TypeScript strict mode, ESLint, consistent formatting, semantic HTML, no secrets in code, SSG preferred over SSR.
- **Content first.** Real content on screen as early as possible. No placeholder-driven development.
- **Deploy early.** Amplify Hosting connected to git from the first push.

---

## Phase 0 — Project Setup & Infrastructure

**Goal:** Working Next.js 15 project wired to AWS Amplify Gen 2, deployed on Amplify Hosting.

### 0.1 Initialize Next.js Project

```bash
npx create-next-app@latest fernandocamacho \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"
```

> `--no-src-dir` is required. Files live at the project root, matching the reference architecture. `@/*` maps to `./*`.

### 0.2 Configure Tailwind v4

Replace the default Tailwind setup with Tailwind v4:

```bash
npm remove tailwindcss postcss autoprefixer
npm install tailwindcss@4 @tailwindcss/postcss@4 tailwind-merge clsx
```

`postcss.config.mjs`:
```js
export default { plugins: { "@tailwindcss/postcss": {} } };
```

Define design tokens in `app/globals.css` using the Tailwind v4 `@theme` block (CSS custom properties for colors, typography, spacing). No `tailwind.config.ts` needed for v4.

### 0.3 Configure TypeScript

`tsconfig.json` — ensure:
```json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./*"] }
  }
}
```

### 0.4 Initialize AWS Amplify Gen 2

```bash
npm install aws-amplify@6 @aws-amplify/backend @aws-amplify/backend-cli @aws-amplify/ui-react
npm install aws-cdk-lib constructs
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb @aws-sdk/client-s3
```

Create the Amplify backend entry point:

**`amplify/backend.ts`**
```typescript
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

defineBackend({ auth, data, storage });
```

### 0.5 Add postinstall Script

`package.json` — add to scripts:
```json
"postinstall": "node scripts/patch-graphql.js && esbuild amplify/functions/**/*.ts --format=esm --platform=node --outdir=amplify --out-extension:.js=.mjs && node scripts/patch-amplify-imports.js"
```

Copy `scripts/patch-graphql.js` and `scripts/patch-amplify-imports.js` from `propiology_org`. These resolve graphql version conflicts and ESM import issues with Amplify Gen 2.

```bash
npm install --save-dev esbuild
```

### 0.6 Define Cognito Auth (`amplify/auth/resource.ts`)

```typescript
import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: { email: true },
  groups: ['Admin'],
  multifactor: { mode: 'OPTIONAL', totp: true },
});
```

- Self sign-up is disabled by default when no `userAttributes.email.required` override is given with a sign-up trigger — confirm this in Cognito Console after first deploy and disable it explicitly.
- Fernando's Admin user is created manually via `npx ampx sandbox` CLI or Cognito Console after first deploy.

### 0.7 Define DynamoDB Data Models (`amplify/data/resource.ts`)

```typescript
import { defineData, a } from '@aws-amplify/backend';

const schema = a.schema({
  Project: a.model({
    title:       a.string().required(),
    company:     a.string(),
    description: a.string(),
    date:        a.string(),
    tags:        a.string().array(),
    order:       a.integer(),
  }).authorization(allow => [
    allow.publicApiKey().to(['read']),
    allow.group('Admin'),
  ]),

  Publication: a.model({
    authors:   a.string().required(),
    title:     a.string().required(),
    venue:     a.string(),
    year:      a.integer(),
    doi:       a.string(),
    s3PdfKey:  a.string(),
    order:     a.integer(),
  }).authorization(allow => [
    allow.publicApiKey().to(['read']),
    allow.group('Admin'),
  ]),

  Experience: a.model({
    company:      a.string().required(),
    role:         a.string().required(),
    location:     a.string(),
    startDate:    a.string(),
    endDate:      a.string(),
    description:  a.string(),
    achievements: a.string().array(),
    order:        a.integer(),
  }).authorization(allow => [
    allow.publicApiKey().to(['read']),
    allow.group('Admin'),
  ]),

  Education: a.model({
    institution:      a.string().required(),
    degree:           a.string().required(),
    field:            a.string(),
    startYear:        a.integer(),
    endYear:          a.integer(),
    thesis:           a.string(),
    s3DiplomaKey:     a.string(),
    s3DiplomaImageKey: a.string(),
    order:            a.integer(),
  }).authorization(allow => [
    allow.publicApiKey().to(['read']),
    allow.group('Admin'),
  ]),

  Award: a.model({
    name:        a.string().required(),
    year:        a.integer(),
    issuer:      a.string(),
    description: a.string(),
    order:       a.integer(),
  }).authorization(allow => [
    allow.publicApiKey().to(['read']),
    allow.group('Admin'),
  ]),

  Contact: a.model({
    name:      a.string().required(),
    email:     a.string().required(),
    subject:   a.string(),
    message:   a.string().required(),
    createdAt: a.datetime(),
  }).authorization(allow => [
    allow.group('Admin'),
  ]),

  SiteSetting: a.model({
    key:   a.string().required(),
    value: a.string().required(),
  }).authorization(allow => [
    allow.publicApiKey().to(['read']),
    allow.group('Admin'),
  ]),
});

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
```

### 0.8 Define S3 Storage (`amplify/storage/resource.ts`)

```typescript
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'fernandocamacho-storage',
  access: (allow) => ({
    'profile-images/*':  [allow.guest.to(['read']), allow.group('Admin').to(['read', 'write', 'delete'])],
    'diplomas/*':        [allow.guest.to(['read']), allow.group('Admin').to(['read', 'write', 'delete'])],
    'publications/*':    [allow.guest.to(['read']), allow.group('Admin').to(['read', 'write', 'delete'])],
  }),
});
```

### 0.9 Wire Amplify Client (`lib/amplify/amplifyConfig.ts`)

```typescript
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';

export function configureAmplify() {
  Amplify.configure(outputs, { ssr: true });
}
```

**`components/providers/AmplifyProvider.tsx`**
```typescript
'use client';
import { configureAmplify } from '@/lib/amplify';
configureAmplify();
export default function AmplifyProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

**`app/layout.tsx`**
```typescript
import AmplifyProvider from '@/components/providers/AmplifyProvider';
// ... fonts, metadata
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  );
}
```

### 0.10 Connect to Amplify Hosting

- Push repo to GitHub
- In AWS Amplify Console: create new app → connect GitHub repo → select `main` branch
- Amplify auto-detects Next.js and configures build settings
- First build provisions all backend resources and generates `amplify_outputs.json`
- Set environment variables in Amplify Console (site URL, table names, S3 bucket name)

**Deliverable:** Next.js 15 app live on Amplify Hosting URL. Cognito, DynamoDB tables, and S3 bucket provisioned. `amplify_outputs.json` committed.

---

## Phase 1 — Layout, Navigation & Design System

**Goal:** Consistent shell and design tokens used across all pages.

### 1.1 Design Tokens

In `app/globals.css`, define the `@theme` block with CSS custom properties:
- Primary blue: `#3880ff` and its scale (50–950)
- Neutral grays for text and backgrounds
- Semantic tokens: `--color-surface`, `--color-text-primary`, `--color-text-muted`, `--color-border`
- Font families: a clean system or web font (e.g., Inter for body, optional display font)
- Spacing, border radius scale

### 1.2 Layout Components (`components/layout/`)

- **`Header`** — logo/name, desktop nav links, dark mode toggle, mobile hamburger
- **`Footer`** — copyright, email, brief nav links
- **`MobileMenu`** — slide-in drawer for small screens

Dark mode toggle stores preference in `localStorage`; applies `dark` class to `<html>`.

### 1.3 Shared UI Components (`components/ui/`)

- **`Card`** — generic card with optional image, title, subtitle, body text
- **`Badge`** — tag/label chip (year, industry, tag)
- **`SectionHeader`** — page H1 with optional subtitle
- **`BackLink`** — "← Volver" navigation

Keep these components minimal and composable. No component library dependency.

### 1.4 Utility Helper (`lib/utils/cn.ts`)

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

**Deliverable:** All routes render a consistent header/footer shell. Responsive on mobile and desktop. Dark mode works.

---

## Phase 2 — Public Pages with Real Content

**Goal:** All 9 public pages live with real content from CV.txt and old portal data. No placeholder text.

### Content Strategy

- Seed DynamoDB with all existing content via a `scripts/seed.ts` script using AWS SDK v3
- Each public page fetches data server-side using Amplify GraphQL client or direct DynamoDB via `lib/data/db.ts`
- SSG (`export const revalidate = false` or `generateStaticParams`) for all public pages
- TypeScript interfaces for all content types defined in `types/index.ts`

### Page Implementation

#### 2.1 Home (`app/page.tsx`)
- Hero: profile photo (`<Image>` from S3 or `public/images/`), name, title
- Expandable bio (client component, `'use client'`, toggle state)
- Grid of 6 navigation cards — server component

#### 2.2 About (`app/about/page.tsx`)
- Full bio from `SiteSetting` (key: `bio_full`)
- Personal details block: languages, nationalities, hobbies, interests
- Contact info

#### 2.3 Work Experience (`app/experience/page.tsx`)
- Vertical timeline layout, server component
- Data from `Experience` DynamoDB model, ordered by `order` field

#### 2.4 Projects (`app/projects/page.tsx`)
- Responsive card grid: 3 cols (lg), 2 (md), 1 (sm)
- Client-side decade filter (`'use client'` wrapper or URL search params)
- Data from `Project` model

#### 2.5 Education (`app/education/page.tsx`)
- Cards per degree with diploma thumbnail (from S3)
- Click opens full-size image or downloads PDF
- Data from `Education` model

#### 2.6 Publications (`app/publications/page.tsx`)
- List, reverse-chronological
- DOI link + PDF download from S3
- Data from `Publication` model

#### 2.7 Awards (`app/awards/page.tsx`)
- Simple list, 3 entries
- Data from `Award` model

#### 2.8 Book — Propiología (`app/book/page.tsx`)
- Cover image, title, synopsis, themes
- External "Comprar en Kindle" CTA button
- Author bio block, link to /about
- Content from `SiteSetting` or hardcoded (book content changes rarely)

#### 2.9 Contact (`app/contact/page.tsx` + `app/api/contact/route.ts`)

**Contact form (client component):**
```bash
npm install react-hook-form zod @hookform/resolvers
```
- Fields: name, email, subject, message
- Zod schema validation
- POST to `/api/contact`

**API route (`app/api/contact/route.ts`):**
- Receives JSON, validates with Zod
- Writes to DynamoDB `Contact` table using AWS SDK v3 `PutCommand`
- Returns `{ success: true }` or error response

**Deliverable:** All 9 public pages live with real content.

---

## Phase 3 — Admin Panel

**Goal:** Fernando can manage all content without touching code.

### 3.1 Auth Guard (`components/auth/RequireAuth.tsx`)

```typescript
'use client';
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then(() => setReady(true))
      .catch(() => router.replace('/admin/login'));
  }, [router]);

  if (!ready) return <div>Loading…</div>;
  return <>{children}</>;
}
```

Used in `app/admin/layout.tsx`:
```typescript
import { RequireAuth } from '@/components/auth/RequireAuth';
export default function AdminLayout({ children }) {
  return <RequireAuth>{children}</RequireAuth>;
}
```

### 3.2 Login Page (`app/admin/login/page.tsx`)

Client component with `LoginForm` using `signIn()` from `aws-amplify/auth`. On success, redirect to `/admin`.

### 3.3 Admin Dashboard (`app/admin/page.tsx`)

Simple stats: count of projects, publications, unread contacts. Navigation cards per section.

### 3.4 Admin CRUD (`app/admin/[section]/page.tsx`)

One dynamic route handles all content types. Sections: `projects`, `publications`, `experience`, `education`, `awards`, `contacts`, `settings`.

Each section renders:
- Table listing all items
- Create / Edit form (same form, pre-populated on edit)
- Delete button with confirmation

Forms use `react-hook-form` + `zod` (same dependency already installed).

File uploads (diplomas, PDFs) use `uploadData` from `aws-amplify/storage` — stores to S3, saves the S3 key in the DynamoDB record.

**Deliverable:** Admin panel fully functional. Fernando can add, edit, delete all content and upload files.

---

## Phase 4 — SEO & AEO Optimization

**Goal:** Every public page is indexable, structured, and answer-engine friendly.

### 4.1 Per-Page Metadata

Use Next.js `generateMetadata` for dynamic pages, static `metadata` export for static pages:

```typescript
// app/projects/page.tsx
export const metadata: Metadata = {
  title: 'Projects — Fernando Camacho',
  description: '21+ data science and engineering projects spanning 1991–2020.',
  openGraph: {
    title: 'Projects — Fernando Camacho',
    images: [{ url: '/images/fcoOK_new.jpg' }],
  },
  alternates: { canonical: 'https://fernandocamacho.com/projects' },
};
```

### 4.2 JSON-LD Structured Data (`lib/seo/JsonLd.tsx`)

```typescript
export function PersonJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Fernando Camacho Ospina",
      jobTitle: "Senior Education Data Analyst",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of New South Wales" },
        { "@type": "CollegeOrUniversity", name: "Universidad de los Andes" },
      ],
      award: ["Premio Innova 2013"],
      url: "https://fernandocamacho.com",
      email: "f.camacho@peopleart.co",
      nationality: ["Colombian", "Australian"],
    })}} />
  );
}
```

Inject `<PersonJsonLd />` in `app/layout.tsx`. Add `BookJsonLd` on `/book`, `ScholarlyArticleJsonLd` per publication on `/publications`, `BreadcrumbList` on all sub-pages.

### 4.3 Sitemap & Robots

`app/sitemap.ts` — list all public routes with `lastModified`.
`app/robots.ts` — allow all, point to sitemap URL.

### 4.4 Performance Targets

- All public pages: SSG (`revalidate = false` or no dynamic data)
- `'use client'` only on: bio toggle (Home), decade filter (Projects), contact form, admin panel, dark mode toggle
- Lighthouse targets: Performance ≥ 90, SEO = 100, Accessibility ≥ 90

**Deliverable:** All pages pass Lighthouse SEO checks. Structured data validates in Google Rich Results Test.

---

## Phase 5 — Assets, Polish & QA

**Goal:** All media assets from the old portal migrated and the portal is production-ready.

### 5.1 Upload Assets to S3

Upload via admin panel or AWS CLI:
- `profile-images/fcoOK_new.jpg` — profile photo
- `diplomas/*.jpg` — diploma images
- `diplomas/*.pdf` — diploma PDFs
- `publications/*.pdf` — academic paper PDFs

Update corresponding DynamoDB records with S3 keys via admin panel.

### 5.2 Favicon & PWA

- Generate favicon set from `fco.png` (72, 96, 128, 144, 152, 192, 384, 512px)
- Place in `public/icons/`
- Write `public/manifest.webmanifest`

### 5.3 Polish

- Consistent hover states, focus rings, transitions
- Smooth scroll for anchor links
- `app/not-found.tsx` — 404 page
- Loading and empty states for data-driven sections
- Verify all internal links resolve

### 5.4 QA

- Browsers: Chrome, Firefox, Safari, Edge
- Viewports: 375px (mobile), 768px (tablet), 1280px (desktop)
- Verify dark mode on all pages
- Test contact form end-to-end (submission appears in admin `/admin/contacts`)
- Test admin CRUD: create, edit, delete for each content type
- Verify diploma and PDF downloads from S3

**Deliverable:** Portal is production-ready. All assets live, no broken links.

---

## Phase 6 — Launch

### 6.1 Environment Variables in Amplify Console

Set in AWS Amplify Console > App > Environment variables:
- `NEXT_PUBLIC_SITE_URL`
- `CONTACT_TABLE_NAME`
- `STORAGE_BUCKET_NAME`
- `AWS_REGION`

`amplify_outputs.json` is committed to the repo and read at runtime by `Amplify.configure()` — the Cognito, GraphQL, and S3 resource identifiers come from there automatically.

### 6.2 Disable Cognito Self Sign-Up

In Cognito Console (or via Amplify backend config): confirm that self sign-up is disabled for the User Pool. Only Fernando's Admin account should exist.

### 6.3 Create Production Admin User

```bash
aws cognito-idp admin-create-user \
  --user-pool-id <pool-id> \
  --username f.camacho@peopleart.co \
  --temporary-password <temp> \
  --message-action SUPPRESS
aws cognito-idp admin-add-user-to-group \
  --user-pool-id <pool-id> \
  --username f.camacho@peopleart.co \
  --group-name Admin
```

### 6.4 Custom Domain

- Configure domain in Amplify Hosting → custom domains
- HTTPS via Amplify-managed ACM certificate
- Update `NEXT_PUBLIC_SITE_URL` and canonical URLs

### 6.5 Seed Production Database

Run seed script against production DynamoDB, or populate via admin panel. Verify all sections display correctly on the live URL.

### 6.6 Final Checklist

- [ ] All public pages load correctly on production URL
- [ ] Contact form submits and record appears in admin
- [ ] Admin login works
- [ ] Admin CRUD operates correctly on production data
- [ ] All S3 assets load (photos, diplomas, PDFs)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Lighthouse audit on live site: Performance ≥ 90, SEO = 100

---

## Key Dependencies

```bash
# Framework & styling
npm install next@15 react@19 react-dom@19
npm install tailwindcss@4 @tailwindcss/postcss@4 tailwind-merge clsx

# Amplify Gen 2
npm install aws-amplify@6 @aws-amplify/backend @aws-amplify/backend-cli @aws-amplify/ui-react
npm install aws-cdk-lib constructs

# AWS SDK v3 (server-side direct DynamoDB/S3 access in API routes)
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb @aws-sdk/client-s3

# Forms & validation
npm install react-hook-form zod @hookform/resolvers

# Build tool for Amplify Gen 2 (devDependency)
npm install --save-dev esbuild
```

---

## Estimated Timeline

| Phase | Description | Effort |
|---|---|---|
| 0 | Setup, Amplify Gen 2, initial deploy | 1–2 days |
| 1 | Layout, nav, design system | 1 day |
| 2 | All 9 public pages with real content | 3–4 days |
| 3 | Admin panel (CRUD + Cognito auth) | 2–3 days |
| 4 | SEO & AEO | 1 day |
| 5 | Assets, polish, QA | 1–2 days |
| 6 | Launch | 0.5 day |
| **Total** | | **~10–13 days** |
