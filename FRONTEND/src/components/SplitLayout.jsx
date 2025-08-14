import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import ReviewPanel from "./ReviewPanel";

const SplitLayout = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/ai/get-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.text();
      setReview(data);
    } catch (err) {
      setReview("Error fetching review.");
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen">
  <div className="w-1/2">
    <CodeEditor code={code} setCode={setCode} onReview={handleReview} />
  </div>
  <div className="w-1/2">
    <ReviewPanel review={review} loading={loading} />
  </div>
</div>

  );
};

export default SplitLayout;
