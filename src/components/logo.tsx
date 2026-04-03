import { cn } from "@/lib/utils";

export const BrokBuddyLogo = ({ className }: { className?: string }) => (
    <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-8 w-auto", className)}
    >
        <defs>
            <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
            </filter>
        </defs>
        <path d="M40 25C28.9543 25 20 33.9543 20 45V85H40V50C40 48.3333 40.8 45 42 45C43.2 45 44 48.3333 44 50V85H52V50C52 40.0571 40 35.8857 40 25Z" fill="#002E4D" />
        <circle cx="40" cy="15" r="8" fill="#002E4D" />
        <g style={{ filter: 'url(#drop-shadow)' }}>
            <path d="M56 85C56 75.0571 68 70.8857 68 60C68 48.9543 76.9543 40 88 40H90C95.5228 40 100 44.4772 100 50C100 55.5228 95.5228 60 90 60H88C82.4772 60 78 64.4772 78 70C78 75.5228 82.4772 80 88 80H90C95.5228 80 100 84.4772 100 90C100 95.5228 95.5228 100 90 100H88C76.9543 100 68 91.0457 68 80C68 75.8857 56 70.0571 56 85Z" fill="#F68E2E" />
            <path d="M52 50C52 40.0571 40 35.8857 40 25C40 18.3333 46 15.2 52 18V50Z" fill="#002E4D" />
            <path d="M56 85C56 75.0571 44 70.8857 44 60C44 51.9543 49.9543 45 58 45H60" stroke="#F68E2E" strokeWidth="0" fill="#F68E2E" />
            <path d="M44 50C44 48.3333 43.2 45 42 45C40.8 45 40 48.3333 40 50H44Z" fill="#002E4D" />
            <path d="M52 50C52 59.9429 40 64.1143 40 75C40 81.6667 46 84.8 52 82V50Z" fill="#002E4D" />
        </g>
    </svg>
);

export const BrokBuddyLogoWithName = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-3", className)}>
        <BrokBuddyLogo />
        <span className="text-xl font-heading font-bold tracking-tight text-primary">BrokBuddy</span>
    </div>
);
