import Backgroundvideo from "../img/pexels_videos_1851190 (2160p).mp4"
function Background() {
    return (
        <video autoPlay loop muted className="video-background row col-12 m-0 p-0">
            <source src={Backgroundvideo} type="video/mp4" className="video-background row" />
            Your browser does not support the video tag.
        </video>
    );
};
export default Background