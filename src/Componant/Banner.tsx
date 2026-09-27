import logo2 from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">

            <div className="pt-20 md:pt-40">

                <p className="font-bold text-4xl">
                    Build Your IDEAL
                </p>

                <p className="text-4xl font-bold">
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </p>

                <p className="mt-4 max-w-xl">
                    Explore frontend, backend, database and tooling options,
                    compare them side by side and put together the stack that
                    fits your next project.
                </p>

                <div className="flex gap-4 pt-5">

                    <button className="btn bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white border-0">
                        Explore Technologies
                    </button>

                    <button className="btn btn-outline">
                        Learn More
                    </button>

                </div>

            </div>

            <div className="mt-10 md:mt-0">
                <img
                    src={logo2}
                    alt="Development Stack"
                    className="w-full max-w-lg"
                />
            </div>

        </div>
    )
}

export default Banner