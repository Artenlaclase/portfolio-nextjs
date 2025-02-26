interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
      <div className="w-full h-48">
        <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
