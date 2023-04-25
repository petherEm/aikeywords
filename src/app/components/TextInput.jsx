"use client";
import { useState } from "react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");

  const submitText = () => {
    extractKeywords(text);
  };

  return (
    <div className="flex flex-col gap-4">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to extract keywords from"
          className="mt-10 md:min-w-[380px] textarea textarea-bordered textarea-lg w-full max-w-xs min-h-[350px]"
        />
        <button
          onClick={submitText}
          className="px-4 py-2 bg-green-600 hover:bg-green-800 rounded-lg font-bold w-fit"
        >
          Extract Keywords
        </button>

    </div>
  );
};

export default TextInput;
