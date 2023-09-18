import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';

const FrontEndEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="p-0 m-0">
      <h1 className="text-2xl font-bold mb-5">Live Code Editor</h1>
      <div className="flex flex-col h-full md:h-[600px]">
        <div className="flex-grow grid md:grid-cols-3 gap-4">
          <AceEditor
            mode="html"
            theme="monokai"
            value={htmlCode}
            onChange={setHtmlCode}
            name="HTML_EDITOR"
            editorProps={{ $blockScrolling: true }}
          />
          <AceEditor
            mode="css"
            theme="monokai"
            value={cssCode}
            onChange={setCssCode}
            name="CSS_EDITOR"
            editorProps={{ $blockScrolling: true }}
          />
          <AceEditor
            mode="javascript"
            theme="monokai"
            value={jsCode}
            onChange={setJsCode}
            name="JS_EDITOR"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <iframe
          title="output"
          className="w-full h-full mt-4 bg-white"
          sandbox="allow-scripts"
          frameBorder="0"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
};

export default FrontEndEditor;
