export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center" aria-label="Loading" role="status">
      <div className="h-5 w-5 animate-spin rounded-full border-3 border-white/40 border-t-white" />
    </div>
  );
};