function OurFeature({ data }) {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <span className="bg-black w-[90px] h-[90px] border-[#fff] border-opacity-75 flex items-center justify-center rounded-full border-[12px]">
        <img width="40" height="40" src={data.icon} alt={data.title} />
      </span>

      <h3 className="font-semibold text-xl mt-7 mb-3">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}

export default OurFeature;
