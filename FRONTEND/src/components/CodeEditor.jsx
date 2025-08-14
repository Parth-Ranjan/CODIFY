import React from "react";

const CodeEditor = ({ code, setCode, onReview }) => {
  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] border-r border-gray-700">
      <div className="px-4 py-2 bg-[#252526] text-gray-300 text-sm font-semibold border-b border-gray-700">
        💻 Code Editor
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 p-4 font-mono text-sm bg-[#1e1e1e] text-gray-100 resize-none outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="// Write your code here..."
      />

      <div className="p-3 bg-[#252526] border-t border-gray-700">
        <button
          onClick={onReview}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-all duration-200"
        >
          🚀 Review Code
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
