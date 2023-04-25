import { TypeAnimation } from "react-type-animation";
import { BsClipboardFill } from "react-icons/bs";

// function to copy text to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const TextOutput = ({ keywords }) => {
  const text = keywords;

  console.log(text);

  return (
    <div className="flex flex-col gap-4 md:p-4 rounded-lg">
      <div className="rounded-lg">
        <div className="card max-w-[350px] md:min-w-[400px] bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-actions justify-end">
              <button
                onClick={() => copyToClipboard(text)}
                className="btn btn-square btn-sm"
              >
                <BsClipboardFill className="hover:text-rose-400" />
              </button>
            </div>
            <div>{text}</div>
          </div>
        </div>
      </div>

      {/* HOW IT IS MADE? */}

      <div className="mockup-code max-w-[350px] md:min-w-[400px] text-[13px]">
        <pre data-prefix="$">
          <code>model: text-davinci-003</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>prompt: Extract keywords from ...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>temperature: 0.5</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>max_token: 60</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>frequency_penalty: 0.8</code>
        </pre>
        <pre data-prefix="$">
          <code>fetching from: </code>
        </pre>
        <pre data-prefix="$">
          <code>https://api.openai.com/v1/completions</code>
        </pre>
      </div>
    </div>
  );
};

export default TextOutput;
