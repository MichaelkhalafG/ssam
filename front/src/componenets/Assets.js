// import profileImage from '../img/profile.jpg';
function Assets({ isDarkMode, toggleMode, FontSize, setFontSize }) {
    return (
        <>
            <div className={`row col-12 rounded-3  justify-content-center ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-lg-5 p-3`} data-aos="zoom-in" data-aos-duration="1000">
                <h2 className={`text-light ${(window.innerWidth > 1100) ? FontSize : "fs-6"} mb-3 text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 rounded-3 p-2`} >
                    who we are ?
                </h2>
                <div className={`col-12 text-start ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 rounded-bottom-0 p-lg-4 p-0 pt-3`}>
                    <p className={`d-inline text-start ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? "fs-4" : "fs-6"} col-12 `} >
                        Welcome to DSM, your premier destination for cutting-edge semantic segmentation solutions tailored for satellite imagery. At DSM, we're dedicated to revolutionizing  how industries, researchers, and decision-makers interpret Earth observation data to drive impactful insights and informed decisions.
                        Our Vision

                        We envision a world where advanced satellite imagery segmentation empowers every sector to address pressing challenges and seize opportunities for sustainable growth. By harnessing the power of semantic segmentation, we strive to unlock the full potential of Earth observation data for the betterment of image segmentation.
                        Key Features
                        High-Precision Segmentation Algorithms: Our platform employs state-of-the-art algorithms to deliver precise and accurate segmentation results, ensuring unparalleled quality and reliability.
                        User-Friendly Interface: Designed with simplicity and efficiency in mind, our intuitive interface makes satellite imagery analysis accessible to users of all skill levels.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Assets;