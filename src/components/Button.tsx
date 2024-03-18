import React, { MouseEvent, ReactNode } from "react";

type Props = {
    onClick(e: MouseEvent<HTMLElement>): void,
    children: ReactNode,
    colour: string
}

const Button: React.FC<Props> = ({ onClick, children, colour }) => {
    return (
        <button onClick={onClick} style={
            { backgroundColor: colour }
        }>{children}</button>
    );
}

export default Button;
