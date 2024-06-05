import profileImg from '../img/profile.jpg';
function Topnav({ isDarkMode, toggleMode }) {
    return (
        <nav className={`topnavbar row m-0 col-12 sticky-top d-flex justify-content-end p-4 ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50`} id='topnav'>
            {/* <div className={`col-1 d-flex justify-content-end`}>
                <div className='col-5 bg-light rounded-circle d-flex justify-content-end'>
                    <img src={profileImg} className='col-12 rounded-circle' alt="profile img" />
                </div>
            </div> */}
        </nav>
    );

}
export default Topnav;