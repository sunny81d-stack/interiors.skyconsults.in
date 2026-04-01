export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-silver-700" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-royal-500 animate-spin" />
      </div>
    </div>
  );
}