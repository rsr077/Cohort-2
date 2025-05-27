import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_Be2Ul8GFgdfp@ep-icy-water-a8ps694m-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  ssl: {
    rejectUnauthorized: false,
  },
});

async function saveUser(firstName: string, lastName: string, password: any, email: string) {
  try {
    await client.connect();
await client.query(`DROP TABLE IF EXISTS users;`);
    // Create table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstName TEXT,
        lastName TEXT,
        password TEXT,  -- ✅ FIXED: Use TEXT instead of NUMBER
        email TEXT UNIQUE NOT NULL
      );
    `);

    // Insert user with 4 values and 4 placeholders
    const insertQuery = 'INSERT INTO users (firstName, lastName, password, email) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = await client.query(insertQuery, [firstName, lastName, password, email]);

    console.log('✅ User saved:', result.rows[0]);
  } catch (err) {
    if (err instanceof Error) {
      console.error('❌ Error saving user:', err.message);
    } else {
      console.error('❌ Unknown error:', err);
    }
  } finally {
    await client.end();
  }
}

// Example call
saveUser('Raju', 'Riya', '343443434', 'rajeefdf656@example.com');
