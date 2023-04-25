"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import TextInput from "./components/TextInput";
import TextOutput from "./components/TextOutput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    "use server";
    console.log(text);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from the following text. Make the first letter of each word uppercase and separate with commas\n\n" +
          text +
          "\n\n",
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(
      "https://api.openai.com/v1/completions",
      options
    );

    const json = await response.json();
    const data = json.choices[0].text.trim();

    console.log(data);
    setKeywords(data);
    setLoading(false);
  };

  return (
    <div className="mt-24 p-10 max-w-6xl mx-auto flex flex-col md:flex-row">
      <div className="">
        <div className="flex flex-col items-start">
          <div className="mockup-code w-fit md:w-[380px]">
            <pre className="flex flex-col p-4">
              <code>Paste your text below</code>
              <code>We will extract keywords for you</code>
            </pre>
          </div>

          <div className="flex md:w-[600px] items-start space-x-12">
            <div className="w-[320px] md:w-[450px]">
              <TextInput extractKeywords={extractKeywords} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start space-x-12">
        <div className="mt-4">
          <TextOutput keywords={keywords} />
        </div>
      </div>
    </div>
  );
}
