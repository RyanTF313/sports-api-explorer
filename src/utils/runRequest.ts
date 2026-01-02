import { ApiEndpoint } from "../types/api";

export async function runRequest(
  endpoint: ApiEndpoint,
  params: Record<string, string>
) {
  const url = new URL(endpoint.baseUrl + endpoint.path);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, value);
    }
  });

  const startTime = performance.now();

  const response = await fetch(url.toString());

  const durationMs = Math.round(performance.now() - startTime);

  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}`
    );
  }

  const data = await response.json();

  return {
    data,
    status: response.status,
    durationMs,
    url: url.toString(),
  };
}
