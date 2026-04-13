import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section className="page page--public">
      <div className="page__content">
        <h1>Unlocked Workforce Solutions</h1>
        <p>
          Workforce partnership, participant progress, employer engagement, and
          outcome reporting in one system.
        </p>
        <div className="page__actions">
          <Link className="button-link" to="/login">
            Enter Portal
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;