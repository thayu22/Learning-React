import type { ReactNode } from "react";

type HeaderProps = {
    title: string;
    subtitle: string;
    children: ReactNode
}

export const Header = ({ title, subtitle, children }: HeaderProps) => {
    return (
        <header className="bg-rose-100 w-full h-full">
            <h1 className="text-center ">{title}</h1>
            <h1 className="mx-6 text-right">{subtitle}</h1>
            {children}
        </header>
    )
}