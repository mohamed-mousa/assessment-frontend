import {
  TopNavBar,
  NavBar,
  Footer,
  Carousel,
  Categories,
  CountDown,
  SectionTitle,
  ProductCard,
  PrimaryBtn,
  SliderContainer,
  CategoryCard,
  OfferProduct,
  FeaturedProductCard,
  OurFeature,
} from "@/components";
import { useEffect, useState } from "react";
import { getProducts, getCategories } from "@/services";
import {
  featuredProduct1,
  featuredProduct2,
  featuredProduct3,
  featuredProduct4,
  iconA,
  iconB,
  iconC,
} from "@/assets";

const Home = () => {
  // stats and variables
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const ourProductsSliderSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  const OurFeatureList = [
    {
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      icon: iconA,
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      icon: iconB,
    },
    {
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
      icon: iconC,
    },
  ];
  // get products from api
  async function fetchProducts() {
    try {
      const { data: data } = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log("🚀 ~ fetchProducts ~ error:", error);
    }
  }

  // get categories from api
  async function fetchCategories() {
    try {
      const { data: data } = await getCategories();
      setCategories(data);
    } catch (error) {
      console.log("🚀 ~ fetchProducts ~ error:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <main>
      {/* Navbar */}
      <TopNavBar />
      <NavBar />

      {/* hero section */}
      <header className="border-t lg:pb-28 pb-8">
        <section className="flex flex-col lg:flex-row-reverse xl:mx-20">
          <Carousel />
          <Categories />
        </section>
      </header>

      {/* Today products */}
      <section className="pt-4 relative">
        <SectionTitle
          className="px-4"
          smallTitle="Today’s"
          largeTitle="Flash Sales"
        >
          <CountDown time={344395} />
          <div></div>
        </SectionTitle>

        <div className="xl:overflow-x-hidden ">
          <article className="xl:ms-20 md:mt-10 mt-4 xl:-me-56 ">
            <SliderContainer arrowsStyle="lg:end-24 end-0 md:absolute gap-3 md:top-20 md:mb-0 mb-4  justify-center">
              {products.map((product) => (
                <ProductCard data={product} showOldPrice />
              ))}
            </SliderContainer>
          </article>
        </div>

        <article className="text-center md:mt-16 mt-7 px-4">
          <PrimaryBtn title="View All Products" toUrl="#" />
        </article>
      </section>

      {/* separator */}
      <div className=" xl:px-24 md:py-12 py-5">
        <hr />
      </div>

      {/* categories */}
      <section className=" relative">
        <SectionTitle
          className="px-4"
          smallTitle="Categories"
          largeTitle="Browse By Category"
        >
          <div></div>
        </SectionTitle>

        <article className="xl:mx-20 md:mt-10 mt-4 ">
          <SliderContainer
            slidesNumber={6}
            slidesNumberInPhone={2}
            arrowsStyle="lg:end-24 end-0 md:absolute gap-3 md:top-20 md:mb-0 mb-4  justify-center"
          >
            {categories.map((category) => (
              <CategoryCard data={category} />
            ))}
          </SliderContainer>
        </article>
      </section>

      {/* separator */}
      <div className=" xl:px-24 md:py-12 py-5">
        <hr />
      </div>

      {/* This Month products */}
      <section className="pt-4 relative">
        <SectionTitle
          className="px-4"
          smallTitle="This Month"
          largeTitle="Best Selling Products"
        >
          <PrimaryBtn title="View All" toUrl="#" />
        </SectionTitle>

        <article className="xl:mx-20 md:mt-10 mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-6">
          {products?.splice(0, 4).map((product) => (
            <ProductCard data={product} hideDiscount showOldPrice />
          ))}
        </article>
      </section>

      {/* separator */}
      <div className=" xl:px-24 md:py-12 py-5"></div>

      {/* product offer */}
      <OfferProduct />

      {/* separator */}
      <div className=" xl:px-24 md:py-12 py-5"></div>

      {/* Our products */}
      <section className="pt-4 relative">
        <SectionTitle
          className="px-4"
          smallTitle="Our Products"
          largeTitle="Explore Our Products"
        >
          <div></div>
        </SectionTitle>

        <article className="xl:mx-20 md:mt-10 mt-4">
          <SliderContainer
            newSettings={ourProductsSliderSettings}
            arrowsStyle="lg:end-24 end-0 md:absolute gap-3 md:top-20 md:mb-0 mb-4  justify-center"
          >
            {products.map((product) => (
              <ProductCard data={product} showOldPrice isNew hideDiscount />
            ))}
          </SliderContainer>
        </article>

        <article className="text-center md:mt-16 mt-7 px-4">
          <PrimaryBtn title="View All Products" toUrl="#" />
        </article>
      </section>

      {/* separator */}
      <div className=" xl:px-24 md:py-12 py-5"></div>

      {/* Featured Product */}
      <div>
        <section className="pt-4 relative">
          <SectionTitle
            className="px-4"
            smallTitle="Featured"
            largeTitle="New Arrival"
          />

          <article className="xl:mx-20 px-4 sm:mt-10 mt-4 flex lg:gap-7 gap-4 sm:flex-row flex-col">
            <div>
              <FeaturedProductCard image={featuredProduct1} />
            </div>
            <div className="flex lg:gap-7 gap-4 flex-col">
              <div>
                <FeaturedProductCard image={featuredProduct2} />
              </div>
              <div className=" flex lg:gap-7 gap-4 flex-row">
                <FeaturedProductCard image={featuredProduct3} />
                <FeaturedProductCard image={featuredProduct4} />
              </div>
            </div>
          </article>
        </section>
      </div>

      {/* separator */}
      <div className=" xl:px-24 md:py-12 py-5"></div>

      {/* our Features */}
      {/* Featured Product */}
      <section className="px-4 xl:mx-20 relative">
        <article className="flex lg:gap-28 sm:gap-16 gap-4 sm:flex-row flex-col justify-center">
          {OurFeatureList.map((item) => (
            <OurFeature data={item} />
          ))}
        </article>
      </section>

      {/* separator */}
      <div className=" xl:px-24 md:py-12 py-5"></div>

      {/* footer */}
      <Footer />
    </main>
  );
};

export default Home;
