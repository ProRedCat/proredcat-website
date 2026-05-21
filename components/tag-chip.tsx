import { cn } from "@/lib/utils";

const tagBaseClass =
    "inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold leading-none transition-colors";

type StaticTagChipProps = React.HTMLAttributes<HTMLSpanElement> & {
    selected?: boolean;
};

type FilterTagButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    selected?: boolean;
};

export function StaticTagChip({ children, className, selected = false, ...props }: StaticTagChipProps) {
    return (
        <span
            className={cn(
                tagBaseClass,
                "hover:border-red-secondary",
                selected
                    ? "border-red-secondary bg-red-secondary text-primary-cream"
                    : "border-primary-navy-dark/20 bg-primary-cream text-primary-navy-dark hover:text-red-secondary",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

export function FilterTagButton({
    children,
    className,
    selected = false,
    type = "button",
    ...props
}: FilterTagButtonProps) {
    return (
        <button
            type={type}
            aria-pressed={selected}
            className={cn(
                tagBaseClass,
                "hover:border-red-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy-dark",
                selected
                    ? "border-red-secondary bg-red-secondary text-primary-cream"
                    : "border-primary-navy-dark/20 bg-primary-cream text-primary-navy-dark hover:text-red-secondary",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
