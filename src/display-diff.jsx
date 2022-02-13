/**
 * display-diff.jsx
 *
 * Assignment 2 response
 *
 * Component to display a diff of 2
 * addresses
 */

import React from 'react';
import {connect} from "react-redux";
import ReactDiffViewer from 'ab-react-diff-viewer';

let DisplayDiff = ({comparisonJson}) => {
    const [text1, text2] = comparisonJson;
    return (
        <ReactDiffViewer
            oldValue={JSON.stringify(text1, null, 2)}
            newValue={JSON.stringify(text2, null, 2)}
            splitView
        />
    )
}

DisplayDiff = connect(state => state)(DisplayDiff)
export default DisplayDiff