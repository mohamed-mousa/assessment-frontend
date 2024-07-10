function Separator({ noLine }) {
  return (
    <>
      <div className=" xl:px-24 md:py-12 py-5">{!noLine && <hr />}</div>
    </>
  );
}

export default Separator;
