import { FC } from "react";

interface BadgeProps {
    text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
    return (
        <span className="inline-flex mb-2 mr-2 max-h-[24px] flex-shrink-0 items-center rounded-full bg-cyan-400/10 px-2 py-1 mt-1 text-xs font-medium text-cyan-500 ring-1 ring-inset ring-cyan-400/20 hover:bg-cyan-400/20">
            {text}
        </span>
    )
}

export default Badge;
