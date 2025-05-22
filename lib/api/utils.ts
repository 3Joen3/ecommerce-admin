export const backendUrl = "http://localhost:5070";

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
