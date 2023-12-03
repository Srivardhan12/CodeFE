import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

export default function Editor(props) {

    const {
        language,
        onChange,
        displayName,
        width,
        height,
        codes
    } = props

    return (
        <>
            <h4 className="mode-name">{displayName}</h4>
            <AceEditor
                className="ace-editor"
                height={height}
                width={width}
                setOptions={{
                    useWorker: false
                }}
                mode={language}
                theme="dracula"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                defaultValue={codes ? "<div></div>\n<style>\n\tdiv {\n\t\twidth: 100px;\n\t\theight: 100px;\n\t\tbackground: #17181a;\n\t}\n</style>" : ""}
                fontSize="15px"
                editorProps={{ $blockScrolling: true }}
            />
        </>
    );
};