export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="eyebrow">{index}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 max-w-2xl text-ink-muted">{description}</p>}
    </div>
  );
}
