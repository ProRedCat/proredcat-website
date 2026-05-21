import { type ReactNode } from "react";

interface UpdateCalloutProps {
    date: string;
    children: ReactNode;
}

export default function UpdateCallout({ date, children }: UpdateCalloutProps) {
    return (
        <aside className="not-prose my-8 border-y border-primary-navy-dark/15 py-5 sm:py-6">
            <div className="border-l-2 border-red-secondary/70 pl-4 sm:pl-5">
                <p className="mb-3 text-sm font-semibold text-primary-navy-dark">
                    <span className="text-red-secondary">Updated</span>
                    {" "}
                    <span className="ml-2 font-medium text-primary-navy-dark/70">{date}</span>
                </p>
                <div className="text-[0.96rem] leading-7 text-primary-navy-dark/90 [&_a]:font-medium [&_a]:text-primary-navy-dark [&_a]:underline [&_a]:underline-offset-2 [&_code]:rounded-sm [&_code]:bg-primary-navy-dark/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_ol]:my-3 [&_p]:m-0 [&_p+p]:mt-3 [&_ul]:my-3">
                    {children}
                </div>
            </div>
        </aside>
    );
}
