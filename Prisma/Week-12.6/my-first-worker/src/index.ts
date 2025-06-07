export default {
  async fetch(request: Request): Promise<Response> {
    const data = {
      message: "Hello from Rajeev's raw Worker!",
      success: true
    }

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
