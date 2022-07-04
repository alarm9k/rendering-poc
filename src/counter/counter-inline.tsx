import React, {useState} from 'react';
import {Button} from '../button/button';
import {useLogRender} from '../helpers';
import './counter.scss'

export function CounterInline(): JSX.Element {
    const [count, setCount] = useState(0);
    const componentName = 'Counter inline';

    console.log('\n');
    useLogRender(componentName);

    // Here the callback for Button is specified "inline" which means that the value of onClick
    // changes on each render of CounterInline. This triggers an unneeded re-render of Button.
    return (
        <div className="Counter">
            <div>Counter without memoization</div>
            <div>Count: {count}</div>
            <Button buttonName="button One" onClick={() => setCount(count => count + 1)}/>
        </div>
    )
}

