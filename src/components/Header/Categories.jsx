import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesList = [
    { name: "Woman’s Fashion", url: "#", children: true },
    { name: "Men’s Fashion", url: "#", children: true },
    { name: "Electronics", url: "#", children: false },
    { name: "Home & Lifestyle", url: "#", children: false },
    { name: "Medicine", url: "#", children: false },
    { name: "Sports & Outdoor", url: "#", children: false },
    { name: "Baby’s & Toys", url: "#", children: false },
    { name: "Groceries & Pets", url: "#", children: false },
    { name: "Health & Beauty", url: "#", children: false },
  ];
  return (
    <article className="px-5 lg:border-r pt-8">
      <ul>
        {categoriesList.map((item) => (
          <li className="mb-3 last:mb-0 flex justify-between items-center w-[217px]">
            <Link to={item.url}>{item.name}</Link>
            {item.children && (
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                  fill="black"
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Categories;
