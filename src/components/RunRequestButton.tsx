type RunRequestButtonProps = {
  isLoading: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function RunRequestButton({
  isLoading,
  disabled,
  onClick,
}: RunRequestButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isLoading ? "Running…" : "Run Request"}
    </button>
  );
}
