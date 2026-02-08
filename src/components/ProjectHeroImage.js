const ProjectHeroImage = ({ heroImage, title }) => {
  if (!heroImage) return null;

  return (
    <div className="flex justify-center w-full">
      <div className="border w-full max-w-[1200px] max-h-[600px] overflow-hidden">
        <img
          className="w-full h-auto object-contain block"
          src={heroImage}
          alt={heroImage}
        />
      </div>
    </div>
  );
};

export default ProjectHeroImage;
