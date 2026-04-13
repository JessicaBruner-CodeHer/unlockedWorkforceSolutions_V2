import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROLES, ROLE_HOME_ROUTES } from '../../constants/roles';

function LoginPage() {
  const navigate = useNavigate();
  const { demoLogin } = useAuth();

  const handleDemoLogin = (role) => {
    demoLogin(role);
    navigate(ROLE_HOME_ROUTES[role]);
  };

  return (
    <section className="page page--public">
      <div className="page__content">
        <h1>Portal Access</h1>
        <p>Temporary access screen for role-based routing and layout setup.</p>

        <div className="login-demo-grid">
          <button type="button" onClick={() => handleDemoLogin(ROLES.SUPER_ADMIN)}>
            Demo Super Admin
          </button>
          <button type="button" onClick={() => handleDemoLogin(ROLES.WEB_ADMIN)}>
            Demo Web Admin
          </button>
          <button type="button" onClick={() => handleDemoLogin(ROLES.STAFF)}>
            Demo Staff
          </button>
          <button type="button" onClick={() => handleDemoLogin(ROLES.PARTNER_ADMIN)}>
            Demo Partner Admin
          </button>
          <button type="button" onClick={() => handleDemoLogin(ROLES.PARTNER_USER)}>
            Demo Partner User
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;