class HttpClient {
  baseURL: string;

  constructor(baseUrl: string) {
    this.baseURL = baseUrl;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);

    return response.json();
  }
}


export { HttpClient };
