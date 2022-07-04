import React from 'react';
import {useLogRender} from "../helpers";

// This component doesn't have any state or props. It will never be re-rendered after its first
// render because it's wrapped in React.memo HOC.
// The only exception is when the parent component is removed from DOM and then re-added.
export const DummyPure = React.memo(() => {
    useLogRender('pure Dummy');

    return (
        <div>
            Dummy pure
        </div>
    );
});

// The component doesn't have any props or state. However, it will still be re-rendered if its
// parent is re-rendered.
export const DummyRegular = () => {
    useLogRender('regular Dummy');

    return (
        <div>Dummy regular</div>
    )
}