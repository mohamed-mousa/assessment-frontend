function SectionTitle(props) {
  return (
    <div className={props.className}>
      <h2 className="xl:mx-20 flex items-center gap-4 text-primary font-semibold ">
        <span className="bg-primary w-[20px] h-[40px] inline-block rounded"></span>
        <span>{props.smallTitle}</span>
      </h2>
      <article className="xl:mx-20 md:flex items-center mt-5 justify-between">
        <h3 className="font-semibold md:text-4xl text-2xl md:mb-0 mb-4">
          {props.largeTitle}
        </h3>
        {props.children}
      </article>
    </div>
  );
}

export default SectionTitle;
