interface UpdateCalloutProps {
    date: string;
    children: React.ReactNode;
}

export default function UpdateCallout({ date, children }: UpdateCalloutProps) {
    return (
        <div className="my-6 rounded-lg border-l-4 border-orange-400 bg-orange-50 p-4">
            <div className="flex items-center gap-2 mb-2">
                <svg
                    className="h-5 w-5 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span className="font-semibold text-orange-700">Update — {date}</span>
            </div>
            <div className="text-orange-900 prose-sm">{children}</div>
        </div>
    );
}
