import ProductRating from "./ProductRating";
import { placeholder } from "@/assets";
import { Link } from "react-router-dom";
function ProductCard({ data, showOldPrice, hideDiscount, isNew }) {
  return (
    <Link className="group px-4 block pb-4" to="#">
      <div className="relative bg-[#F5F5F5] text-center p-0 mb-4 rounded ">
        {/* product image */}
        <img
          src={data.images[0].replace(/["\[\]"]/g, "") || placeholder}
          className="mx-auto rounded"
          alt={data.title}
        />

        {/* add to card */}
        <button className="text-white font-semibold py-3 px-4 rounded-b bg-black absolute bottom-0 left-0 end-0 hidden group-hover:block transition-all">
          Add to card
        </button>

        {/* product discount */}
        {!hideDiscount && (
          <span className="bg-primary rounded-md absolute top-4 start-4 text-white px-3 py-1 text-sm">
            -44%
          </span>
        )}

        {/* new product */}

        {isNew && (
          <span className="bg-[#00FF66] rounded-md absolute top-4 start-4 text-white px-3 py-1 text-sm">
            New
          </span>
        )}

        {/* add to wishlist */}
        <span className="bg-white w-[34px] h-[34px] rounded-full absolute top-4 end-4 flex items-center justify-center cursor-pointer hover:bg-primary">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            className="stroke-black "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        {/* view image */}
        <span className="bg-white w-[34px] h-[34px] rounded-full absolute top-16 end-4 flex items-center justify-center cursor-pointer hover:bg-primary">
          <svg
            width="22"
            height="16"
            className="stroke-black "
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* product title */}
      <h3 className="font-semibold mb-3">{data.title.substring(0, 35)}</h3>

      {/* product price */}
      <div className={showOldPrice ? "" : "flex"}>
        <span className="font-semibold text-primary me-4">${data.price}</span>
        {showOldPrice && (
          <span className="font-semibold opacity-50 line-through">
            ${data.price * 2}
          </span>
        )}
        <ProductRating />
      </div>

      {/* colors */}

      <div class="flex flex-wrap mt-3">
        <div class="flex items-center me-2">
          <input
            id="red-radio"
            type="radio"
            name="colored-radio"
            class="w-5 h-5 bg-yellow-200  border-2 border-black focus:ring-red-500  focus:ring-2"
          />
        </div>
        <div class="flex items-center me-2">
          <input
            id="green-radio"
            type="radio"
            name="colored-radio"
            class="w-5 h-5  bg-primary border-2 border-primary focus:ring-green-500  focus:ring-2"
          />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
