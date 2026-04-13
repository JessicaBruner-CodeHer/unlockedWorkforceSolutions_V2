import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROLE_HOME_ROUTES, ROLE_LABELS } from '../../constants/roles';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleHomeClick = () => {
    if (!isAuthenticated || !user) {
      navigate('/');
      return;
    }

    navigate(ROLE_HOME_ROUTES[user.role] || '/');
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button type="button" className="navbar__brand" onClick={handleHomeClick}>
          Unlocked Workforce Solutions
        </button>

        <div className="navbar__actions">
          {!isAuthenticated && (
            <Link className="navbar__link" to="/login">
              Login
            </Link>
          )}

          {isAuthenticated && user && (
            <>
              <div className="navbar__user">
                <span className="navbar__user-name">{user.name}</span>
                <span className="navbar__user-role">{ROLE_LABELS[user.role]}</span>
              </div>
              <button type="button" className="navbar__button" onClick={handleLogout}>
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