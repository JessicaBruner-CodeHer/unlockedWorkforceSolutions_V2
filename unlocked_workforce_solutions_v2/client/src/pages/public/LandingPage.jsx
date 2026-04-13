import uwsLogo from '../../assets/images/unlocked_workforce_solutions_logo_transparent.png';

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="landing-hero__content">
          <div className="landing-hero__logo-wrap">
            <img
              src={uwsLogo}
              alt="Unlocked Workforce Solutions logo"
              className="landing-hero__logo"
            />
          </div>

          <h1 className="landing-hero__tagline">
            One Community. Endless Opportunity. Real Transformation.
          </h1>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;