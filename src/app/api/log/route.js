
export async function POST(request) {
    try {
        const data = await request.json();
        const { username, email, feedback } = data;
    
        console.log('Received feedback with the following data:');
        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Feedback: ${feedback}`);
    
        return new Response(JSON.stringify({ message: 'Data received' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
      }
  }
  