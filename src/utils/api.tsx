import { apiConfig } from './config';

class Api {
  private baseUrl: string;

  private headers: {
    'Content-Type': string;
    Accept: string;
  };

  constructor(parameters: any) {
    this.baseUrl = parameters.baseUrl;
    this.headers = parameters.headers;
  }

  async getData(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    const statusError = await res.json();
    const { message } = statusError;
    throw new Error(message);
  }

  async postData(path: string, newTask: { id: string; task: string }) {
    const { id, task } = newTask;
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ id, task }),
    });
    if (res.ok) {
      return res.json();
    }
    const statusError = await res.json();
    const { message } = statusError;
    throw new Error(message);
  }

  async patchData(
    path: string,
    task: { id: string; date: string; status: string },
  ) {
    const { id, date, status } = task;
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({ id, date, status }),
    });
    if (res.ok) {
      return res.json();
    }
    const statusError = await res.json();
    const { message } = statusError;
    throw new Error(message);
  }
}

const api = new Api({
  baseUrl: apiConfig.BASE_URL,
  headers: apiConfig.HEADERS,
});

export default api;
