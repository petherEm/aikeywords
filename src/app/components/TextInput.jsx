"use client";
import { useState } from "react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");

  const submitText = () => {
    console.log('dupa dupa');
    extractKeywords(text);

  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-72 mt-4 p-4 border-2 border-gray-300 rounded-lg text-slate-300 focus:outline-none bg-transparent"
      />
      <button
        onClick={submitText}
        className="px-4 py-2 bg-orange-600 hover:bg-orange-800 rounded-lg font-bold"
      >
        Extract Keywords
      </button>
    </div>
  );
};

export default TextInput;
