import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div className='navbar'>
            <h1>My Portofolio</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
    )
}

export default NavigationBar;