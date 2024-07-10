import { offer } from "@/assets";
import { PrimaryBtn, CountDown } from "@/components";
function OfferProduct() {
  return (
    <div>
      <div className="bg-black px-4 lg:ps-12 pt-8 w-full overflow-hidden">
        <div className="flex items-center justify-evenly text-white">
          <div className="md:p-8 p-4">
            <div className="flex items-center gap-6">
              <p className="text-[#00FF66] font-semibold">Categories</p>
            </div>
            <h1 className="md:text-5xl text-xl lg:w-72 xl:w-[443px] md:my-8 my-4">
              Enhance Your Music Experience
            </h1>
            <CountDown styleType={1} time={1996796} />

            <div className="md:mt-10 mt-4">
              <PrimaryBtn
                color="bg-[#00FF66] hover:bg-primary"
                title="Buy Now!"
                toUrl="#"
              />
            </div>
          </div>
          <img
            src={offer}
            alt="hero image"
            className="mt-5 md:block hidden w-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default OfferProduct;
