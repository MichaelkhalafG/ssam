function Loader() {
    let padding = "0%";
    if (window.innerWidth < 1100) {
        padding = "10%";
    } else {
        padding = "25%";
    }

    return (
        <div className={`col-12 d-flex justify-content-center bg-black bg-opacity-50`} style={{ position: "absolute", top: 0, left: 0, height: "100%", zIndex: 5 }} data-aos="zoom-in">
            <div className="section-banner" style={{ position: "absolute", top: padding }}>
                <div id="star-1">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-2">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-3">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-4">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-5">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-6">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-7">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Loader;