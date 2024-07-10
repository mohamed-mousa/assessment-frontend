import { Link } from "react-router-dom";
import { Input } from "@/components";
import { qrCode, GooglePlay, AppStore } from "@/assets";

function Footer() {
  const accountLinks = [
    { name: "My Account", url: "#" },
    { name: "Login / Register", url: "#" },
    { name: "Cart", url: "#" },
    { name: "Wishlist", url: "#" },
    { name: "Shop", url: "#" },
  ];

  const quickLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms Of Use", url: "#" },
    { name: "FAQ", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <footer className="bg-black">
      <section className="text-white sm:py-12 py-5 xl:mx-20 gap-8 px-5 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
        {/* footer element */}
        <article>
          {/* title */}
          <h4 className="font-bold md:text-xl text-base mb-5">Exclusive</h4>

          {/* content */}
          <ul>
            <li className="font-semibold mb-4">
              <Link to="#">Subscribe</Link>
            </li>
            <li className="mb-3">
              <span>Get 10% off your first order</span>
            </li>
            <li>
              <Input
                placeholder="Enter your email"
                styles="footer-send-mail-input"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="absolute md:top-3 top-3 end-3 start-auto sm:end-auto sm:start-[180px] cursor-pointer"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Input>
            </li>
          </ul>
        </article>

        {/* footer element */}
        <article>
          {/* title */}
          <h4 className="font-bold md:text-xl text-base mb-5">Support</h4>

          {/* content */}
          <ul>
            <li className="mb-4 sm:pe-16">
              21st Floor, The Binary Tower, Marasi Drive, Business bay, Dubai
            </li>
            <li className="mb-4">
              <a href="mailto:info@royalclass.group">info@royalclass.group</a>
            </li>
            <li>
              <a href="tel:+97142408999" target="_blank">
                +971 42 408 999
              </a>
            </li>
          </ul>
        </article>

        {/* footer element */}
        <article>
          {/* title */}
          <h4 className="font-bold md:text-xl text-base mb-5">Account</h4>

          {/* content */}
          <ul>
            {accountLinks.map((item) => (
              <li className="mb-3">
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </article>

        {/* footer element */}
        <article>
          {/* title */}
          <h4 className="font-bold md:text-xl text-base mb-5">Quick Link</h4>

          {/* content */}
          <ul>
            {quickLinks.map((item) => (
              <li className="mb-3">
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </article>

        {/* footer element */}
        <article>
          {/* title */}
          <h4 className="font-bold md:text-xl text-base mb-5">Download App</h4>

          {/* content */}
          <div>
            {/* get tha app */}
            <div className="flex gap-3 items-start">
              <img src={qrCode} alt="qrCode" />
              <div>
                <img className="mb-3" src={GooglePlay} alt="GooglePlay" />
                <img src={AppStore} alt="AppStore" />
              </div>
            </div>

            {/* media links */}
            <ul className="flex gap-7 mt-6">
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2814_1218)">
                      <path
                        d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
                        fill="white"
                        stroke="black"
                        stroke-width="0.2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2814_1218">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* Copyright */}
      <section className="text-white text-opacity-20 text-center px-5 sm:py-8 border-white border-opacity-10 py-5 border-t">
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <svg
            width="21"
            className="stroke-white opacity-20"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 18.3332C15.1024 18.3332 18.8333 14.6022 18.8333 9.99984C18.8333 5.39746 15.1024 1.6665 10.5 1.6665C5.89762 1.6665 2.16666 5.39746 2.16666 9.99984C2.16666 14.6022 5.89762 18.3332 10.5 18.3332Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 8.14799C13 8.14799 11.9706 6.6665 10.2549 6.6665C8.53921 6.6665 7.16666 8.14799 7.16666 9.99984C7.16666 11.8517 8.53921 13.3332 10.2549 13.3332C11.9706 13.3332 13 11.8517 13 11.8517"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>
            Copyright
            <Link to="#" className="underline mx-1">
               Royal Class Group
            </Link>
            2022. All right reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
