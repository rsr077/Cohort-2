import { Hono } from 'hono'

// Create a new Hono app
const app = new Hono()

// Define a route for GET /
app.get('/', (c) => {
  return c.text('Hello, World from Hono + TypeScript!')
})

// Export the app (required by Cloudflare Workers)
export default app
