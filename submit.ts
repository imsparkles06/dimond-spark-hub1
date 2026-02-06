import { createClient } from '@supabase/supabase-js';

// 1. Use Edge Runtime for maximum speed (runs instantly)
export const config = {
  runtime: 'edge',
};

// 2. Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  try {
    const body = await req.json();
    const { name, email, resume } = body;

    // 3. Only save to Database (No email sending)
    const { error } = await supabase
      .from('applicants')
      .insert([
        { name, email, resume_url: resume }
      ]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    // If Supabase fails, tell the frontend
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}