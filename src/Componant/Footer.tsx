import logo3 from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer className="bg-base-200 mt-16">

            <div className="container mx-auto px-6 md:px-12 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}

                    <div>

                        <img
                            src={logo3}
                            alt="Dev Stack"
                            className="w-36"
                        />

                        <div className="pt-6">

                            <p>
                                Curated tools, technologies, and resources
                                for developers building
                            </p>

                            <p>
                                modern software.
                            </p>

                        </div>

                        <div className="flex gap-4 font-bold mt-6">

                            <a className="link link-hover">
                                GitHub
                            </a>

                            <a className="link link-hover">
                                Twitter
                            </a>

                            <a className="link link-hover">
                                LinkedIn
                            </a>

                        </div>

                    </div>


                    {/* Product */}

                    <nav className="flex flex-col gap-2">

                        <h6 className="footer-title">
                            Product
                        </h6>

                        <a className="link link-hover">
                            Home
                        </a>

                        <a className="link link-hover">
                            Technologies
                        </a>

                        <a className="link link-hover">
                            Projects
                        </a>

                    </nav>


                    {/* Company */}

                    <nav className="flex flex-col gap-2">

                        <h6 className="footer-title">
                            Company
                        </h6>

                        <a className="link link-hover">
                            About Us
                        </a>

                        <a className="link link-hover">
                            Contact
                        </a>

                        <a className="link link-hover">
                            Careers
                        </a>

                    </nav>


                    {/* Legal */}

                    <nav className="flex flex-col gap-2">

                        <h6 className="footer-title">
                            Legal
                        </h6>

                        <a className="link link-hover">
                            Privacy Policy
                        </a>

                        <a className="link link-hover">
                            Terms of Service
                        </a>

                    </nav>

                </div>


                {/* Bottom */}

                <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-4">

                        <a className="link link-hover">
                            Privacy
                        </a>

                        <a className="link link-hover">
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer