import { Link } from "react-router-dom";
import { placeholder } from "@/assets";
function CategoryCard({ data }) {
  return (
    <Link
      className="group flex-col items-center justify-center p-8 mx-4 border-black border-opacity-30 flex border rounded hover:border-primary w-[130px] h-[120px] md:w-[170px] md:h-[145px] hover:bg-primary"
      to="#"
    >
      {/* icon */}
      <img
        src={data.image || placeholder}
        className="mx-auto rounded"
        width={56}
        height={56}
        alt=""
      />

      {/* category name */}
      <h3 className="mt-3 group-hover:text-white">{data.name}</h3>
    </Link>
  );
}

export default CategoryCard;
