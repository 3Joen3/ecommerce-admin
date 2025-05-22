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

  const response = await fetch(url, {
    method: "POST",
    body: body,
    headers: headers,
  });

  if (!response.ok)
    throw new Error(`[post] ${url} failed (HTTP: ${response.status})`);

  return (await response.json()) as T;
}

export async function get<T>(endpoint: string): Promise<T> {
  const url = `${backendUrl}/${endpoint}`;

  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!response.ok)
    throw new Error(`[get] ${url} failed (HTTP: ${response.status})`);

  return (await response.json()) as T;
}
