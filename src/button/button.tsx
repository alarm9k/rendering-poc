import React from 'react';
import {useLogRender} from "../helpers";

interface ButtonProps {
    onClick: () => void;
    buttonName: string;
}

// Button is wrapped in React.memo which means it's a pure component. It will only re-render
// if its props or state change.
export const Button = React.memo(({onClick, buttonName}: ButtonProps) => {
    // Why don't we wrap this callback in a useCallback hook? Because <button> is not a
    // React component. We don't have to worry about its re-renders.
    const handleClick = (): void => onClick && onClick();

    useLogRender(buttonName);

    return (
        <button onClick={handleClick}>{buttonName}</button>
    )
});