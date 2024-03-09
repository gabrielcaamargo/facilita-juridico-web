class HttpClient {
  baseURL: string;

  constructor(baseUrl: string) {
    this.baseURL = baseUrl;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);

    return response.json();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async create(path: string, body: any) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json();
  }

  async delete(path: string) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE'
    });

    return response.json();
  }
}

export { HttpClient };
