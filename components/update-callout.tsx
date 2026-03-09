import { type ReactNode } from "react";

interface UpdateCalloutProps {
    date: string;
    children: ReactNode;
}

export default function UpdateCallout({ date, children }: UpdateCalloutProps) {
    return (
        <aside className="not-prose my-8 rounded-lg border border-primary-navy-dark/20 bg-primary-navy-dark/5 p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-primary-navy-dark">
                <span className="text-sm font-semibold uppercase tracking-[0.08em]">Update</span>
                <span className="text-sm opacity-80">{date}</span>
            </div>
            <div className="text-[0.96rem] leading-7 text-primary-navy-dark/90 [&_a]:font-medium [&_a]:text-primary-navy-dark [&_a]:underline [&_a]:underline-offset-2 [&_code]:rounded-sm [&_code]:bg-primary-cream [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_ol]:my-3 [&_p]:m-0 [&_p+p]:mt-3 [&_ul]:my-3">
                {children}
            </div>
        </aside>
    );
}
