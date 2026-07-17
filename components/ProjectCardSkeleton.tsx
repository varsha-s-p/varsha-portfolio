export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 border border-line bg-surface p-5">
      <div className="skeleton h-6 w-2/3 rounded-sm" />
      <div className="space-y-2">
        <div className="skeleton h-3 w-full rounded-sm" />
        <div className="skeleton h-3 w-5/6 rounded-sm" />
      </div>
      <div className="flex gap-2">
        <div className="skeleton h-5 w-16 rounded-sm" />
        <div className="skeleton h-5 w-20 rounded-sm" />
      </div>
      <div className="skeleton mt-auto h-4 w-24 rounded-sm" />
    </div>
  );
}
