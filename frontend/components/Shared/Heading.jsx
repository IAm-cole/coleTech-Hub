export const Heading = ({title, subtitle}) => {
  return (
    <div>
      <div className=" mb-8 text-center max-w-150 mx-auto space-y-2">
        <h1 className="text-3xl font-bold lg:text-4xl ">{title}</h1>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};
