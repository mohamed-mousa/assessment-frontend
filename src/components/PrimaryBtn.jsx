import { Link } from "react-router-dom";

function PrimaryBtn({ title, toUrl, color }) {
  return (
    <Link
      className={`rounded px-5 py-2 text-white  ${
        color ? color : "bg-primary hover:bg-black"
      }`}
      to={toUrl}
    >
      {title}
    </Link>
  );
}

export default PrimaryBtn;
