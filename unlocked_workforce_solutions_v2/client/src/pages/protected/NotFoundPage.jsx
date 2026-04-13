import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page">
      <div className="page__content">
        <h1>Page Not Found</h1>
        <p>The page you requested does not exist.</p>
        <Link className="button-link" to="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;