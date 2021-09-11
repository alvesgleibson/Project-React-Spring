import ImgDsDark from 'assets/img/ds-dark.svg'

const NavBar = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
                <div className="container">
                    <nav className="my-2 my-md-0 mr-md-3">
                      <a href="https://github.com/alvesgleibson" target="_blank" rel="noreferrer">  <img  src={ImgDsDark} alt="DevSuperior" width="120" /></a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
