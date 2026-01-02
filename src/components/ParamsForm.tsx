import { ApiEndpoint } from "../types/api";

type ParamsFormProps = {
  endpoint: ApiEndpoint;
  params: Record<string, string>;
  onChange: (params: Record<string, string>) => void;
};

export function ParamsForm({ endpoint, params, onChange }: ParamsFormProps) {
  function handleParamChange(key: string, value: string) {
    onChange({
      ...params,
      [key]: value,
    });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium text-gray-900 dark:text-gray-400">Parameters</h2>

      {endpoint.params.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This endpoint does not require any parameters.
        </p>
      )}

      {endpoint.params.map((param) => {
        const value = params[param.key] ?? param.defaultValue ?? "";

        return (
          <div key={param.key} className="space-y-1">
            <label
              htmlFor={param.key}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {param.label}
              {param.required && (
                <span className="ml-1 text-red-500">*</span>
              )}
            </label>

            <input
              id={param.key}
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder={param.example}
              value={value}
              onChange={(e) =>
                handleParamChange(param.key, e.target.value)
              }
            />

            {param.description && (
              <p className="text-xs text-gray-500">
                {param.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Upgrades:
// - Add validation for required parameters
// - Show example values as placeholders
// - Group parameters by type (e.g., query, path)
// - Auto-focus first required param
// - Disable Run button until required params filled
// - “Use example” one-click fill