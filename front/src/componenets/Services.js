function Services({ isDarkMode, toggleMode, FontSize, setFontSize }) {
    return (
        <>
            <div className={`row d-flex justify-content-center m-0 px-2 pt-lg-0 pt-5 pb-3`} data-aos="zoom-in" data-aos-duration="1000">
                <h2 className={`text-light col-lg-6 col-10 ${(window.innerWidth > 1100) ? FontSize : "fs-6"}  text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"} rounded-3 p-2`} >Services</h2>
            </div >
            <div className={`row col-12 rounded-3  justify-content-center ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-1`} data-aos="zoom-in" data-aos-duration="1000">
                {(window.innerWidth > 1100) ?
                    <div id="carouselExampleIndicators" className="carousel slide col-12">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="row carousel-inner">
                            <div className="carousel-item active p-5 ">
                                <div className={`col-12 d-flex justify-content-center`}>
                                    <div className={`p-2 col-md-8 ${(isDarkMode) ? "bg-dark " : "bg-light "} rounded-3  col-12 bg-light`} style={{ border: "#FFD700 solid 2px" }}>
                                        <div className={`${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-1`} style={{ borderBottom: "#FFD700 solid 2px" }}>
                                            <p className={` m-0 text-center pb-1 col-12 color-gold ${(window.innerWidth > 1100) ? FontSize : "fs-6"}`}>
                                                Gold
                                            </p>
                                        </div>
                                        <div className="p-5 col-12 rounded-3" style={{ borderBottom: "#FFD700 solid 2px" }}>
                                            <p className={`text-center col-12 p-0 m-0 color-gold fs-6`}>
                                                <span className="text-decoration-line-through">
                                                    $9.99
                                                </span>
                                                <span className="ms-3 p-2 bg-pirple-50 rounded-5">
                                                    save 30%
                                                </span>
                                            </p>
                                            <p className={`mb-3 text-center col-12 p-0 m-0 color-gold fs-5`}>
                                                $
                                                <span className="fs-1">
                                                    6.66
                                                </span>
                                                /month
                                            </p>
                                            <button className={`navitem btn bg-pirple col-12 ${(isDarkMode) ? "text-light" : "text-dark"} border border-2 border-gold rounded-3`}>
                                                Get Started
                                            </button>
                                        </div>
                                        <ul className="list-group my-3">
                                            <li className={`list-group-item text-center border-gold p-4 ${(isDarkMode) ? "bg-dark color-gold" : "bg-light color-gold"}`} >Unlimited number of photos</li>
                                            <li className={`list-group-item text-center border-gold p-4 ${(isDarkMode) ? "bg-dark color-gold" : "bg-light color-gold"}`} >Three months free</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item p-5">
                                <div className={`col-12 d-flex justify-content-center`}>
                                    <div className={`p-2 col-md-8 ${(isDarkMode) ? "bg-dark " : "bg-light "} rounded-3  col-12 bg-light`} style={{ border: "#A162F7 solid 2px" }}>
                                        <div className={`${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-1`} style={{ borderBottom: "#A162F7 solid 2px" }}>
                                            <p className={` m-0 text-center pb-1 col-12 ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? FontSize : "fs-6"}`}>
                                                Silver
                                            </p>
                                        </div>
                                        <div className="p-5 col-12 rounded-3" style={{ borderBottom: "#A162F7 solid 2px" }}>
                                            <p className={`text-center col-12 p-0 m-0 ${(isDarkMode) ? "text-light" : "text-dark"} fs-6`}>
                                                <span className="text-decoration-line-through">
                                                    $6
                                                </span>
                                                <span className="ms-3 p-2 bg-pirple-50 rounded-5">
                                                    save 20%
                                                </span>
                                            </p>
                                            <p className={`mb-3 text-center col-12 p-0 m-0 ${(isDarkMode) ? "text-light" : "text-dark"} fs-5`}>
                                                $
                                                <span className="fs-1">
                                                    4.8
                                                </span>
                                                /month
                                            </p>
                                            <button className={`navitem btn bg-pirple col-12 ${(isDarkMode) ? "text-light" : "text-dark"} border border-2 rounded-3`}>
                                                Get Started
                                            </button>
                                        </div>
                                        <ul className="list-group my-3">
                                            <li className={`list-group-item text-center p-4 ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >500 photo per month</li>
                                            <li className={`list-group-item text-center p-4 ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >one months free</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    :
                    <>
                        <div className={`col-12 my-2 d-flex justify-content-center`}>
                            <div className={`p-2 col-md-8 ${(isDarkMode) ? "bg-dark " : "bg-light "} rounded-3  col-12 bg-light`} style={{ border: "#A162F7 solid 2px" }}>
                                <div className={`${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-1`} style={{ borderBottom: "#A162F7 solid 2px" }}>
                                    <p className={` m-0 text-center pb-1 col-12 ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? FontSize : "fs-6"}`}>
                                        bronze
                                    </p>
                                </div>
                                <div className="p-5 col-12 rounded-3" style={{ borderBottom: "#A162F7 solid 2px" }}>
                                    <p className={`text-center col-12 p-0 m-0 d-flex flex-column ${(isDarkMode) ? "text-light" : "text-dark"} fs-6`}>
                                        <span className="text-decoration-line-through">
                                            $5.99
                                        </span>
                                        <span className=" p-2 bg-pirple-50 rounded-5">
                                            save 25%
                                        </span>
                                    </p>
                                    <p className={`mb-3 text-center col-12 p-0 m-0 ${(isDarkMode) ? "text-light" : "text-dark"} fs-5`}>
                                        $
                                        <span className="fs-1">
                                            3.99
                                        </span>
                                        /month
                                    </p>
                                    <button className={`navitem btn bg-pirple col-12 ${(isDarkMode) ? "text-light" : "text-dark"} border border-2 rounded-3`}>
                                        Get Started
                                    </button>
                                </div>
                                <ul className="list-group my-3">
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >An item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A second item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A third item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A fourth item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >And a fifth one</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-12 my-2 d-flex justify-content-center`}>
                            <div className={`p-2 col-md-8 ${(isDarkMode) ? "bg-dark " : "bg-light "} rounded-3  col-12 bg-light`} style={{ border: "#A162F7 solid 2px" }}>
                                <div className={`${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-1`} style={{ borderBottom: "#A162F7 solid 2px" }}>
                                    <p className={` m-0 text-center pb-1 col-12 ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? FontSize : "fs-6"}`}>
                                        bronze
                                    </p>
                                </div>
                                <div className="p-5 col-12 rounded-3" style={{ borderBottom: "#A162F7 solid 2px" }}>
                                    <p className={`text-center col-12 p-0 m-0  d-flex flex-column ${(isDarkMode) ? "text-light" : "text-dark"} fs-6`}>
                                        <span className="text-decoration-line-through">
                                            $5.99
                                        </span>
                                        <span className=" p-2 bg-pirple-50 rounded-5">
                                            save 25%
                                        </span>
                                    </p>
                                    <p className={`mb-3 text-center col-12 p-0 m-0 ${(isDarkMode) ? "text-light" : "text-dark"} fs-5`}>
                                        $
                                        <span className="fs-1">
                                            3.99
                                        </span>
                                        /month
                                    </p>
                                    <button className={`navitem btn bg-pirple col-12 ${(isDarkMode) ? "text-light" : "text-dark"} border border-2 rounded-3`}>
                                        Get Started
                                    </button>
                                </div>
                                <ul className="list-group my-3">
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >An item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A second item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A third item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A fourth item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >And a fifth one</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-12 my-2 d-flex justify-content-center`}>
                            <div className={`p-2 col-md-8 ${(isDarkMode) ? "bg-dark " : "bg-light "} rounded-3  col-12 bg-light`} style={{ border: "#A162F7 solid 2px" }}>
                                <div className={`${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-1`} style={{ borderBottom: "#A162F7 solid 2px" }}>
                                    <p className={` m-0 text-center pb-1 col-12 ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? FontSize : "fs-6"}`}>
                                        bronze
                                    </p>
                                </div>
                                <div className="p-5 col-12 rounded-3" style={{ borderBottom: "#A162F7 solid 2px" }}>
                                    <p className={`text-center col-12 p-0 m-0  d-flex flex-column ${(isDarkMode) ? "text-light" : "text-dark"} fs-6`}>
                                        <span className="text-decoration-line-through">
                                            $5.99
                                        </span>
                                        <span className=" p-2 bg-pirple-50 rounded-5">
                                            save 25%
                                        </span>
                                    </p>
                                    <p className={`mb-3 text-center col-12 p-0 m-0 ${(isDarkMode) ? "text-light" : "text-dark"} fs-5`}>
                                        $
                                        <span className="fs-1">
                                            3.99
                                        </span>
                                        /month
                                    </p>
                                    <button className={`navitem btn bg-pirple col-12 ${(isDarkMode) ? "text-light" : "text-dark"} border border-2 rounded-3`}>
                                        Get Started
                                    </button>
                                </div>
                                <ul className="list-group my-3">
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >An item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A second item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A third item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >A fourth item</li>
                                    <li className={`list-group-item text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"}`} >And a fifth one</li>
                                </ul>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
export default Services;