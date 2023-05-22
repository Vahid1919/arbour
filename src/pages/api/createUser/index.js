import { Pool } from 'pg';

// Create a connection pool
const pool = new Pool({
  connectionString: 'your_database_connection_string',
});

export default async function handler(req, res) {
  try {
    // Get a client from the connection pool
    const client = await pool.connect();

    // Execute the database query
    const result = await client.query('SELECT * FROM users');

    // Release the client back to the connection pool
    client.release();

    // Return the query result as the API response
    res.status(200).json(result.rows);
  } catch (error) {
    // Handle any errors that occurred during the database call
    console.error('Error executing database query:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}