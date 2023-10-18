

const Feature = () => {
    return (
        <div>
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 space-x-4  bg-white shadow-md rounded-lg sm:p-8 h-56 mx">
                <div className="flex items-center space-x-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqlZhXmurqbPtW3f0RhfGYWZgJogEsrrSO7Fr0ROIJc9NfQwQVDKzHDZUadOKk0Vf_yTE&usqp=CAU" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden md:block lg:block">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">100%</h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">Authentic Products</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-enGuQqvpmnaOmpmi7ZWrJhyrf_w3J3NAZQ&usqp=CAU" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden md:block lg:block">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">COD</h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">Fast & Secure</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                        <img src="https://www.ostinteriors.com/wp-content/uploads/2023/01/clock-icon-gold-round-button-gold-round-button-golden-coin-shiny-frame-shadow-luxury-realistic-border-concept-abstract-167075591.jpg" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden md:block lg:block">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">24/7</h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">Support</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                        <img src="https://d194ip2226q57d.cloudfront.net/images/lightbulb_logo_biz.2e16d0ba.fill-500x400.jpg" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden md:block lg:block">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">FREE</h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">Beauty Tips</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;