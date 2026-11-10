import type { ReactNode } from "react";

type HeaderProps = {
    title: string;
    subtitle: string;
    children: ReactNode
}

export const Header = ({ title, subtitle, children }: HeaderProps) => {
    return (
        <header>
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            {children}
        </header>
    )
}