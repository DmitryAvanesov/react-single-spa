import React from 'react';
import ReactDOMClient from 'react-dom/client';
import rootComponent from './App';
// SingleSpaContext is a react@16.3 (if available) context that provides singleSpa props
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';

export const { bootstrap, mount, unmount } = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent,
    errorBoundary(err, info, props) {
        // https://reactjs.org/docs/error-boundaries.html
        return <div>This renders when a catastrophic error occurs</div>;
    },
});
