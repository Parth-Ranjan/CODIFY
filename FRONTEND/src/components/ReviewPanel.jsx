import React from "react";

const ReviewPanel = ({ review, loading }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-4 py-2 bg-white border-b border-gray-200 text-gray-700 text-sm font-semibold">
        📝 Code Review
      </div>

      <div className="flex-1 overflow-auto p-4 text-sm">
        {loading ? (
          <p className="text-blue-500 animate-pulse">Analyzing code...</p>
        ) : review ? (
          <pre className="whitespace-pre-wrap font-mono bg-gray-100 p-3 rounded-md border border-gray-200">
            {review}
          </pre>
        ) : (
          <p className="text-gray-400 italic">
            No review yet. Write code and click <span className="font-semibold">"Review Code"</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewPanel;
