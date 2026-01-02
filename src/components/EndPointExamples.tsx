import { EndpointExample } from "../types/api";

type EndpointExamplesProps = {
  examples: EndpointExample[];
  onSelect: (params: Record<string, string>) => void;
};

export function EndpointExamples({
  examples,
  onSelect,
}: EndpointExamplesProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-300">
        Try an example
      </p>

      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example.title}
            onClick={() => onSelect(example.params)}
            className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-100 dark:text-gray-400"
          >
            {example.title}
          </button>
        ))}
      </div>
    </div>
  );
}
