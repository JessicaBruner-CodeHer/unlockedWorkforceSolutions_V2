import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import arouetLogo from '../../assets/images/redLogo.png';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const isPublicPage = !isAuthenticated && (location.pathname === '/' || location.pathname === '/login');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <Link to="/" className="navbar__brand">
            <img src={arouetLogo} alt="Arouet logo" className="navbar__brand-logo" />
          </Link>
        </div>

        {isPublicPage ? (
          <nav className="navbar__center" aria-label="Public navigation">
            <a href="#about" className="navbar__link">
              About
            </a>
            <a href="#events" className="navbar__link">
              Events
            </a>
            <a href="#job-board" className="navbar__link">
              Job Board
            </a>
            <a href="#testimonials" className="navbar__link">
              Testimonials
            </a>
          </nav>
        ) : (
          <div className="navbar__center navbar__center--empty" />
        )}

        <div className="navbar__right">
          {!isAuthenticated ? (
            <NavLink to="/login" className="navbar__button-link">
              Login
            </NavLink>
          ) : (
            <>
              <div className="navbar__user">
                <span className="navbar__user-name">{user?.name || 'User'}</span>
                <span className="navbar__user-role">{user?.role || 'Authenticated'}</span>
              </div>
              <button type="button" className="navbar__button-link" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;