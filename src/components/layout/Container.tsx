import { cn } from "@/lib/utils";

/**
 * Standard content-width container. 1200px max — matches the Nav and Hero
 * grid (max-w-[1200px] px-6 lg:px-10) so every section sits on the same
 * vertical guideline as the header.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1200px] px-6 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
