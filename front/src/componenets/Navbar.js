import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Assets from '../img/Assets.png';
import Services from '../img/Services.png';
import Sam from '../img/sam.png';
import Messages from '../img/Messages.png';
import Settings from '../img/Settings.png';
import Logout from '../img/Logout.png';


function Navbar({ isDarkMode, toggleMode, setAuthenticated }) {
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
    const location = useLocation();

    return (
        <div className={`row ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50  navbar d-md-flex d-none flex-column justify-content-start col-xl-2 col-lg-3 col-4 p-4 m-0`} key="nav">
            <Logo isDarkMode={isDarkMode} />
            <div className="row col-12 ps-0 p-3 pe-3 pt-5">
                <div className="col-12 d-flex m-0 flex-column justify-content-start">
                    {item_list1.map((item) => {
                        return (
                            <Link to={item.to} className={`${isDarkMode ? "text-light" : "text-dark"} text-decoration-none m-0 p-0 d-flex`} key={item.id}>
                                <button className={`row col-12 my-1 mx-0 py-2 border-0 ${(location.pathname === item.to) ? (isDarkMode ? "bg-pirple text-light" : "bg-pirple text-dark") : (isDarkMode ? "bg-dark text-light" : "bg-light text-dark")} rounded-2  bg-opacity-50 navitem`}>
                                    <img src={item.imgsrc} alt={item.imgalt} className='col-3' />
                                    <h6 className='col-9 m-0 p-0'>{item.text}</h6 >
                                </button>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className='nav_item_down p-4 '>
                <div className="row col-12 p-3 pe-4 pt-5">
                    <div className="col-12 d-flex flex-column justify-content-start">
                        {item_list2.map((item) => {
                            return (
                                <Link to={item.to} className={`${isDarkMode ? "text-light" : "text-dark"} text-decoration-none m-0 p-0 d-flex`} key={item.id}>
                                    <button onClick={item.onClick} className={`row col-12 my-1 mx-0 py-2 border-0 ${(location.pathname === item.to) ? (isDarkMode ? "bg-pirple text-light" : "bg-pirple text-dark") : (isDarkMode ? "bg-dark text-light" : "bg-light text-dark")} rounded-2  bg-opacity-50 navitem`}>
                                        <img src={item.imgsrc} alt={item.imgalt} className='col-3' />
                                        <h6 className='col-9 m-0 p-0'>{item.text}</h6 >
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
