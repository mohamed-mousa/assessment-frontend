import { heroImage, AppleGrayLogo } from "@/assets";
import { Link } from "react-router-dom";
function Carousel() {
  return (
    <article className="px-4 lg:ps-12 pt-8 w-full ">
      <div
        id="default-carousel"
        className="relative w-full bg-black"
        data-carousel="slide"
      >
        {/*  Carousel wrapper */}
        <div className="relative h-56 overflow-hidden  md:h-96">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="flex items-center justify-evenly text-white">
              <div className="md:p-8 p-4">
                <div className="flex items-center gap-6">
                  <img src={AppleGrayLogo} alt="hero image" />

                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="md:text-5xl text-xl lg:w-72 my-5">
                  Up to 10% off Voucher
                </h1>
                <Link className="flex items-center gap-3 justify-start">
                  <span className="underline">Shop Now</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12H20M20 12L13 5M20 12L13 19"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <img
                src={heroImage}
                alt="hero image"
                className="mt-5 md:block hidden"
              />
            </div>
          </div>

          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="flex items-center justify-evenly text-white">
              <div className="md:p-8 p-4">
                <div className="flex items-center gap-6">
                  <img src={AppleGrayLogo} alt="hero image" />

                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="md:text-5xl text-xl lg:w-72 my-5">
                  Up to 10% off Voucher
                </h1>
                <Link className="flex items-center gap-3 justify-start">
                  <span className="underline">Shop Now</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12H20M20 12L13 5M20 12L13 19"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <img
                src={heroImage}
                alt="hero image"
                className="mt-5 md:block hidden"
              />
            </div>
          </div>

          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="flex items-center justify-evenly text-white">
              <div className="md:p-8 p-4">
                <div className="flex items-center gap-6">
                  <img src={AppleGrayLogo} alt="hero image" />

                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="md:text-5xl text-xl lg:w-72 my-5">
                  Up to 10% off Voucher
                </h1>
                <Link className="flex items-center gap-3 justify-start">
                  <span className="underline">Shop Now</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12H20M20 12L13 5M20 12L13 19"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <img
                src={heroImage}
                alt="hero image"
                className="mt-5 md:block hidden"
              />
            </div>
          </div>

          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="flex items-center justify-evenly text-white">
              <div className="md:p-8 p-4">
                <div className="flex items-center gap-6">
                  <img src={AppleGrayLogo} alt="hero image" />

                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="md:text-5xl text-xl lg:w-72 my-5">
                  Up to 10% off Voucher
                </h1>
                <Link className="flex items-center gap-3 justify-start">
                  <span className="underline">Shop Now</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12H20M20 12L13 5M20 12L13 19"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <img
                src={heroImage}
                alt="hero image"
                className="mt-5 md:block hidden"
              />
            </div>
          </div>

          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="flex items-center justify-evenly text-white">
              <div className="md:p-8 p-4">
                <div className="flex items-center gap-6">
                  <img src={AppleGrayLogo} alt="hero image" />

                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="md:text-5xl text-xl lg:w-72 my-5">
                  Up to 10% off Voucher
                </h1>
                <Link className="flex items-center gap-3 justify-start">
                  <span className="underline">Shop Now</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12H20M20 12L13 5M20 12L13 19"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <img
                src={heroImage}
                alt="hero image"
                className="mt-5 md:block hidden"
              />
            </div>
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {/* Item 1 */}
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          {/* Item 2 */}
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          {/* Item 3 */}
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          {/* Item 4 */}
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          {/* Item 5 */}
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
      </div>
    </article>
  );
}

export default Carousel;
