import logo from "../img/logo.png";
import menu from "../img/icons8-menu-32.png";
import Assets from '../img/Assets.png';
import Services from '../img/Services.png';
import Sam from '../img/sam.png';
import Messages from '../img/Messages.png';
import Settings from '../img/Settings.png';
import Logout from '../img/Logout.png';
import NavlistPhone from './NavListPhone';
function Phonenav({ isDarkMode, toggleMode, setAuthenticated }) {
    let item_list1 = [
        {
            imgsrc: Sam,
            imgalt: 'Segmant any thing',
            text: 'Segmant any thing',
            id: 'Segmant_any_thing',
            to: '/home'
        },
        {
            imgsrc: Messages,
            imgalt: 'Contect Us',
            text: 'Contect Us',
            id: 'Contect_Us',
            to: '/messages'
        },
        {
            imgsrc: Assets,
            imgalt: 'About',
            text: 'About',
            id: 'About',
            to: '/assets'
        },
        {
            imgsrc: Services,
            imgalt: 'Services',
            text: 'Services',
            id: 'Services',
            to: '/services'
        },
    ];

    let item_list2 = [
        {
            imgsrc: Settings,
            imgalt: 'Settings',
            text: 'Settings',
            id: 'Settings',
            to: '/setting'
        },
        {
            imgsrc: Logout,
            imgalt: 'Logout',
            text: 'Logout',
            id: 'Logout',
            onClick: () => {
                setAuthenticated(false); // Logout action
            }
        }
    ];
    return (
        <nav className={`row topnavbar m-0 navbar col-12 row ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50`} style={{ position: "fixed", zIndex: 999, width: "100%" }}>
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src={logo} alt="logo" className="col-10 logo rounded-circle" />
                </div>
                <button className="navbar-toggler border-0 border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <img src={menu} alt="menu" />
                </button>
                <div className={`offcanvas offcanvas-end ${(isDarkMode) ? "bg-dark" : "bg-light"}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className={`btn-close ${(isDarkMode) ? "bg-secondary" : "bg-light"}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body p-5 d-flex flex-column">
                        {/* <Logo /> */}
                        <NavlistPhone items={item_list1} isDarkMode={isDarkMode} />
                        <NavlistPhone items={item_list2} isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div>
        </nav>

    );
}
export default Phonenav;