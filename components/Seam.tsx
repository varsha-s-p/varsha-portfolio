export default function Seam() {
  return (
    <div className="relative mx-auto h-px w-full max-w-5xl px-6" aria-hidden>
      <div
        className="h-px w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, var(--line) 12%, var(--line) 88%, transparent)",
        }}
      />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2">
        <span className="h-1 w-1 animate-seam-pulse rounded-full bg-ember [animation-delay:0ms]" />
        <span className="h-1 w-1 animate-seam-pulse rounded-full bg-ember [animation-delay:400ms]" />
        <span className="h-1 w-1 animate-seam-pulse rounded-full bg-ember [animation-delay:800ms]" />
      </div>
    </div>
  );
}
