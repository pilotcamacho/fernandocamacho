import { NextResponse } from 'next/server';
import outputs from '@/amplify_outputs.json';

const CREATE_CONTACT = `
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const res = await fetch(outputs.data.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': outputs.data.api_key,
    },
    body: JSON.stringify({
      query: CREATE_CONTACT,
      variables: {
        input: {
          name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || undefined,
          message: message.trim(),
        },
      },
    }),
  });

  const json = (await res.json()) as { errors?: unknown };

  if (json.errors) {
    console.error('[contact] GraphQL errors:', json.errors);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
