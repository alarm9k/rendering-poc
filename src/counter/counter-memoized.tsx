import React, {useCallback, useState} from 'react';
import {Button} from '../button/button';
import {useLogRender} from '../helpers';
import './counter.scss'
import {DummyPure, DummyRegular} from '../dummy/dummy';

export function CounterMemoized(): JSX.Element {
    const [count, setCount] = useState(0);
    const componentName = 'Counter memoized';

    const clickCallback = useCallback(() => setCount(count => count + 1), []);

    console.log('\n');
    useLogRender(componentName);

    // Here the callback passed to Button is memoized by wrapping it in useCallback. This preserves
    // the value of clickCallback between the renders of CounterMemoized and does not trigger
    // re-renders of Button.

    // We also have two other components here, DummyPure and DummyRegular. None of them has any state
    // or props. Despite that DummyRegular will still render every time the parent (CounterMemoized)
    // is re-rendered. DummyPure will not, however, because it is wrapped in React.memo and represents
    // a pure component.
    return (
        <div className="Counter">
            <div>Counter with memoization</div>
            <DummyPure/>
            <DummyRegular/>
            <div>Count: {count}</div>
            <Button buttonName="button Two" onClick={clickCallback}/>
        </div>
    )
}