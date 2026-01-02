import { useEffect, useState } from "react";
import { endpoints } from "./config/endpoints";
import { ApiEndpoint, ApiResponseMetadata } from "./types/api";
import { runRequest } from "./utils/runRequest";
import { useDarkMode } from "./hooks/useDarkMode";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { EndpointSelector } from "./components/EndpointSelector";
import { ParamsForm } from "./components/ParamsForm";
import { RunRequestButton } from "./components/RunRequestButton";
import { ResponseViewer } from "./components/ResponseViewer";
import { EndpointExamples } from "./components/EndPointExamples";

export default function App() {
  const { isDark, toggle } = useDarkMode();
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(
    null
  );
  const [params, setParams] = useState<Record<string, string>>({});
  // allowing any type for response data until I have more knowledge about the different response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<ApiResponseMetadata | null>(null);

  useEffect(() => {
    setParams({});
  }, [selectedEndpoint]);

  async function handleRunRequest() {
    if (!selectedEndpoint) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await runRequest(selectedEndpoint, params);
      setResponse(result.data);
      setMeta({
        status: result.status,
        durationMs: result.durationMs,
        url: result.url,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 h-screen">
      <div className="max-w-xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Sports API Explorer</h1>
          <DarkModeToggle isDark={isDark} toggle={toggle} />
        </div>

        <EndpointSelector
          endpoints={endpoints}
          selectedEndpoint={selectedEndpoint}
          onSelect={setSelectedEndpoint}
        />
        {selectedEndpoint?.examples && (
          <EndpointExamples
            examples={selectedEndpoint.examples}
            onSelect={setParams}
          />
        )}
        {selectedEndpoint && (
          <ParamsForm
            endpoint={selectedEndpoint}
            params={params}
            onChange={setParams}
          />
        )}
        {selectedEndpoint && (
          <RunRequestButton
            isLoading={isLoading}
            disabled={selectedEndpoint.params.some(
              (p) => p.required && !params[p.key]
            )}
            onClick={handleRunRequest}
          />
        )}
        {response && <ResponseViewer data={response} meta={meta} />}
        {error && <ResponseViewer data={error} meta={meta} />}
      </div>
    </div>
  );
}

// Upgrades:
// - Group endpoints by category
// - Add a “What does this do?” tooltip
// - Show required params count in option text
