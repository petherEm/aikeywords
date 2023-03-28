

const TextOutput = ({ keywords }) => {
 const text = keywords;

  return (
    <div className="flex flex-col gap-4 bg-blue-900 p-4 rounded-lg">
      <div className="rounded-lg">
        <h1 className="text-slate-200 text-xl font-bold mb-4">Suggested keywords:</h1>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextOutput;
