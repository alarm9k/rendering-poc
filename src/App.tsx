import React from 'react';
import './App.scss';
import {CounterInline} from "./counter/counter-inline";
import {CounterMemoized} from "./counter/counter-memoized";
import {useLogRender} from "./helpers";

function App() {
    useLogRender('Main app');

    return (
        <div className="App">
            <div style={{marginBottom: '1em', maxWidth: 500}}>
                <p>
                    All renders are logged to the console. Clicking on <b>button One</b> will trigger re-render of its parent counter component. However, clicking on <b>button Two</b> will only trigger re-render of the parent, but not the button component.
                </p>

                <p>
                    This might not have a noticeable effect on smaller apps but may have significant impact on a larger app's performance.
                </p>
            </div>

            <CounterInline/>
            <CounterMemoized/>
        </div>
    );
}

export default App;
