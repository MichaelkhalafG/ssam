import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Navlistbutton(props) {
    useEffect(() => {
        // Cleanup function to remove event listeners
        return () => {
            // Remove event listeners here if necessary
        };
    }, []);
    return (
        <div className="row col-12 p-3 pe-4 pt-5">
            <div className="col-12 d-flex flex-column justify-content-start">
                {props.items.map((item) => {
                    return (
                        <Link to={item.to} className={`${props.isDarkMode ? "text-light" : "text-dark"} text-decoration-none m-0 p-0 d-flex`}>
                            <button key={item.id} className={`row col-12 my-1 mx-0 py-2 border-0 ${props.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} rounded-2  bg-opacity-50 navitem`}>
                                <img src={item.imgsrc} alt={item.imgalt} className='col-3' />
                                <h6 className='col-9 m-0 p-0'>{item.text}</h6 >
                            </button>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Navlistbutton;
