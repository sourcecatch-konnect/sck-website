import { cn } from "@/lib/utils"

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`
        }
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        // Shine effect
        "animate-shiny-text [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shine gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",
        className
      )}
      {...props}>
      {children}
    </span>
  );
}
