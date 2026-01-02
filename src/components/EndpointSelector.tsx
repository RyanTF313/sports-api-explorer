import { ApiEndpoint } from "../types/api";

type EndpointSelectorProps = {
  endpoints: ApiEndpoint[];
  selectedEndpoint: ApiEndpoint | null;
  onSelect: (endpoint: ApiEndpoint) => void;
};

export function EndpointSelector({
  endpoints,
  selectedEndpoint,
  onSelect,
}: EndpointSelectorProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="endpoint"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Endpoint
      </label>

      <select
        id="endpoint"
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-600"
        value={selectedEndpoint?.id ?? ""}
        onChange={(e) => {
          const endpoint = endpoints.find(
            (ep) => ep.id === e.target.value
          );
          if (endpoint) onSelect(endpoint);
        }}
      >
        <option value="" disabled>
          Select an endpoint…
        </option>

        {endpoints.map((endpoint) => (
          <option key={endpoint.id} value={endpoint.id}>
            {endpoint.name}
          </option>
        ))}
      </select>

      {selectedEndpoint && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {selectedEndpoint.description}
        </p>
      )}
    </div>
  );
}
