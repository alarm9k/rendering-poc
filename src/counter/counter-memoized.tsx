import React, {useCallback, useState} from 'react';
import {Button} from '../button/button';
import {useLogRender} from '../helpers';
import './counter.scss'

export function CounterMemoized(): JSX.Element {
    const [count, setCount] = useState(0);
    const componentName = 'Counter memoized';

    const clickCallback = useCallback(() => setCount(count => count + 1), []);

    useLogRender(componentName);

    // Here the callback passed to Button is memoized by wrapping it in useCallback. This preserves
    // the value of clickCallback between the renders of CounterMemoized and does not trigger
    // re-renders of Button.
    return (
        <div className="Counter">
            <div>Counter with memoization</div>
            <div>Count: {count}</div>
            <Button buttonName="button Two" onClick={clickCallback}/>
        </div>
    )
}