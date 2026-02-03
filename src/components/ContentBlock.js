const ContentBlock = ({ block }) => {
  switch (block.type) {
    case 'text':
      return <p>{block.value}</p>;
    case 'image':
      return (
        <div className="project-image">
          <img src={block.value} className="w-100" alt={block.value} />
        </div>
      );
    case 'orderedList':
      return (
        <ol>
          {block.value.map((element) => (
            <li>{element}</li>
          ))}
        </ol>
      );
    case 'unorderedList':
      return (
        <ul>
          {block.value.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      );
    case 'subtitle':
      return <h3>{block.value}</h3>;
    default:
      return null;
  }
};

export default ContentBlock;
