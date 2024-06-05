import logo from '../img/logo.png'
function Logo(props) {
    return (
        <div className={`row ${props.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 rounded-3 p-2 col-12`}>
            <img src={logo} alt="logo" className='col-3' />
            <h3 className='col-9 text-start m-0 p-0'>SSAM</h3 >
        </div>
    )
}
export default Logo;