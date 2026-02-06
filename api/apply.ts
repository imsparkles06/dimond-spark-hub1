// // api/apply.ts
// import { Resend } from 'resend';

// export const config = {
//   runtime: 'edge',
// };

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(request: Request) {
//   if (request.method !== 'POST') {
//     return new Response('Method Not Allowed', { status: 405 });
//   }

//   try {
//     const body = await request.json();
//     const { name, email, resume } = body;

//     const { data, error } = await resend.emails.send({
//       from: 'Team Diamond <onboarding@resend.dev>', // Use this exact email for testing
//       to: [email], // In test mode, this MUST be YOUR email address used to sign up for Resend
//       subject: 'Welcome to the Protocol',
//       html: `
//         <h1>Application Received</h1>
//         <p><strong>Agent:</strong> ${name}</p>
//         <p><strong>Resume:</strong> ${resume}</p>
//         <p>We will review your credentials shortly.</p>
//       `,
//     });

//     if (error) {
//       return new Response(JSON.stringify({ error }), { status: 500 });
//     }

//     return new Response(JSON.stringify({ success: true, data }), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
//   }
// }