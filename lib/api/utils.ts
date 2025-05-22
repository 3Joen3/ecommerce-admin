"use server";

export const backendUrl = "http://localhost:5070";

export async function post<T>(
  endpoint: string,
  data: any,
  isFormData: boolean = false
): Promise<T> {
  const url = `${backendUrl}/${endpoint}`;
  const body = isFormData ? data : JSON.stringify(data);
  const headers = isFormData
    ? undefined
    : { "Content-Type": "application/json" };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: body,
      headers: headers,
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    return (await response.json()) as T;
  } catch (error) {
    console.error(`[post] Error fetching ${url}`, error);
    throw error;
  }
}

export async function get<T>(endpoint: string): Promise<T> {
  const url = `${backendUrl}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`HTTP: ${response.status}`);

    return (await response.json()) as T;
  } catch (error) {
    console.error(`[get] Error fetching ${url}:`, error);
    throw error;
  }
}
