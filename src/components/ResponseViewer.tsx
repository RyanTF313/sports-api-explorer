import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";


type ResponseViewerProps = {
  data: unknown;
  meta?: {
    status: number;
    durationMs: number;
    url: string;
  } | null;
};

export function ResponseViewer({ data, meta }: ResponseViewerProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const formattedJson = data
    ? JSON.stringify(data, null, 2)
    : "";

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [formattedJson]);

  if (!data) {
    return (
      <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-sm text-gray-500">
        Run a request to see the response.
      </div>
    );
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900 dark:text-gray-400">Response</h2>

        <button
          onClick={handleCopy}
          className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-400"
        >
          {copied ? "Copied!" : "Copy JSON"}
        </button>
      </div>

      {meta && (
        <div className="text-xs text-gray-500 space-x-2">
          <span>Status: {meta.status}</span>
          <span>•</span>
          <span>{meta.durationMs}ms</span>
        </div>
      )}

      <pre className="max-h-96 overflow-auto rounded-md bg-gray-900 p-4 text-xs dark:bg-black">
        <code
          ref={codeRef}
          className="language-json"
        >
          {formattedJson}
        </code>
      </pre>

      {meta?.url && (
        <p className="break-all text-xs text-gray-400 dark:text-gray-400">
          Request URL: {meta.url}
        </p>
      )}
    </div>
  );
}


// Upgrade:
// - Prism.js highlighting *done*
// - Collapsible JSON nodes
// - Raw / Pretty toggle
// - Curl snippet display