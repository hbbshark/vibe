import { cn } from "@/lib/utils";
export interface CourseCardProps {
  title: string;
  caption: string;
  available?: boolean;
  compact?: boolean;
}
export function CourseCard({
  title,
  caption,
  available = true,
  compact = false,
}: CourseCardProps) {
  return (
    <article
      className={cn(
        "rounded-card border border-line bg-surface shadow-card",
        compact ? "p-4" : "p-6",
      )}
    >
      <p className="mb-2 text-caption text-secondary">
        {available ? "Есть места" : "Мест нет"}
      </p>
      <h2 className="text-title font-semibold">{title}</h2>
      <p className="mt-3 text-body text-secondary">{caption}</p>
    </article>
  );
}
