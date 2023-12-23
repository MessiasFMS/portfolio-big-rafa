import { ReactNode } from "react";

interface SkillsProps {
    icon: ReactNode;
    title: string;
}

export function SkillCard(props: SkillsProps){
    return (
        <div className="flex gap-3 items-center font-bold dark:text-zinc-400 border rounded px-6 py-6 shadow-xl dark:shadow-zinc-900 border-zinc-300 dark:border-zinc-800 hover:border-blue-700 hover:dark:border-blue-700 transition-colors duration-1000">
            <div>{props.icon}</div>
            <div>{props.title}</div>
        </div>
    )
}