import { useAuth } from '../../hooks/useAuth';

function LoginPage() {
  const { login } = useAuth();

  const handleDemoLogin = () => {
    login({
      id: 'demo-user',
      name: 'Demo User',
      email: 'demo@example.com',
      role: 'super_admin',
    });
  };

  return (
    <section className="login-page">
      <div className="login-page__container">
        <h1>Login</h1>
        <p>Temporary login page for routing and protected route testing.</p>
        <button type="button" onClick={handleDemoLogin}>
          Demo Login
        </button>
      </div>
    </section>
  );
}

export default LoginPage;