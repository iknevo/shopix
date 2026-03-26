import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { H2 } from "./typography"
import { type ComponentProps } from "react"

type SectionProps = {
  title?: string
  description?: string
  action?: ReactNode
  children: ReactNode
  className?: string
  containerClassName?: string
} & ComponentProps<"section">

export default function Section({
  title,
  description,
  action,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn("scroll-mt-16 py-10 md:py-14", className)} {...props}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {(title || action) && (
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              {title && (
                <H2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</H2>
              )}

              {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
            </div>

            {action && <div>{action}</div>}
          </div>
        )}

        <div>{children}</div>
      </div>
    </section>
  )
}
