export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-silver-950">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-silver-700" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-royal-500 animate-spin" />
        </div>
        <p className="font-accent text-sm tracking-[0.3em] text-silver-400 uppercase">
          Sky Consults
        </p>
      </div>
    </div>
  );
}