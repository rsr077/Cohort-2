import { Client } from 'pg';


const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_Be2Ul8GFgdfp@ep-steep-breeze-a8sg33vn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  ssl: {
    rejectUnauthorized: false,
  },
});


// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  

  try {

   
  await client.query(`DROP TABLE IF EXISTS users;`);
    // Create table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
         USERNAME TEXT,
        password TEXT,  -- ✅ FIXED: Use TEXT instead of NUMBER
        email TEXT UNIQUE NOT NULL
      );`);

// Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);