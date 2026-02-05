const ContentBlock = ({ block }) => {
  switch (block.type) {
    case 'text':
      return <p>{block.value}</p>;
    case 'image':
      return (
        <div className="flex justify-center">
          <div className="border w-full max-w-[1200px] max-h-[600px] overflow-hidden">
            <img
              className="w-full h-auto object-contain block"
              src={block.value}
              alt={block.value}
            />
          </div>
        </div>
      );
    case 'orderedList':
      return (
        <ol className="list-decimal list-inside pl-4 space-y-1">
          {block.value.map((element, idx) => (
            <li key={idx} className="ml-2">
              {element}
            </li>
          ))}
        </ol>
      );
    case 'unorderedList':
      return (
        <ul className="list-disc list-inside pl-4 space-y-1">
          {block.value.map((element, idx) => (
            <li key={idx} className="ml-2">
              {element}
            </li>
          ))}
        </ul>
      );
    case 'subtitle':
      return <h2>{block.value}</h2>;
    default:
      return null;
  }
};

export default ContentBlock;
