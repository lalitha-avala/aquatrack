interface ModulePlaceholderProps {
  title: string;
  summary: string;
}

export function ModulePlaceholder({ title, summary }: ModulePlaceholderProps) {
  return (
    <article className="surface-card module-placeholder">
      <p className="module-placeholder__eyebrow">Farmer workspace</p>
      <h1 className="module-placeholder__title">{title}</h1>
      <p className="module-placeholder__summary">{summary}</p>
    </article>
  );
}
