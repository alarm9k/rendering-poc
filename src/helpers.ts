import {useRef} from "react";

export function useIsFirstRender(): boolean {
    const ref = useRef(true);
    const isFirstRender = ref.current;
    ref.current = false;
    return isFirstRender;
}

export function useLogRender(componentName: string): void {
    const message = useIsFirstRender() ? 'first render' : 'render';
    console.log(`${componentName}: ${message}`);
}