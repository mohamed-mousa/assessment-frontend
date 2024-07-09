import { Link } from "react-router-dom";
function TopNavBar() {
  return (
    <article className="bg-black p-4 text-white">
      <div className=" flex xl:flex-row flex-col lg:justify-center justify-between items-center relative">
        <div className="flex sm:gap-4 flex-wrap md:text-base text-sm text-center justify-center xl:mb-0 mb-1">
          {/* title */}
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>

          {/* url link */}
          <Link to="#" className="font-bold hover:font-extrabold underline">
            ShopNow
          </Link>
        </div>

        {/* lang toggle button */}
        <div className="xl:absolute xl:end-16">
          <button
            id="langDropdown"
            className="flex hover:bg-primary px-3 justify-center items-center py-1 rounded-sm"
            data-dropdown-toggle="dropdown"
            type="button"
          >
            English
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
                fill="white"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="langDropdown"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Arabic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TopNavBar;
