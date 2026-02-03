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
    default:
      return null;
  }
};

export default ContentBlock;
