function SliderPrevArrow({ onClick }) {
  return (
    <svg
      onClick={onClick}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      className="cursor-pointer"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
      <path
        d="M14.5 23H31M31 23L24 16M31 23L24 30"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SliderPrevArrow;
