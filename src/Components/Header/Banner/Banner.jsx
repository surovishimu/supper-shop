
const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-high-end-atmosphere-simple-wind-makeup-area-banner-image_195398.jpg"
        alt=""
        className="w-full h-[80vh]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black flex flex-col justify-center items-center text-white p-4">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold mb-4">Elegance in Bloom</h1>
        <p className="lg:text-xl md:text-lg text-sm">Discover the Beauty of Orchids - Your Gateway to Radiant Elegance</p>
      </div>
    </div>
  );
};

export default Banner;

