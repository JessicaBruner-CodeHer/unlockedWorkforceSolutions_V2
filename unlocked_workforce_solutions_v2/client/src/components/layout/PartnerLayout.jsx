import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function PartnerLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-layout__body">
        <Sidebar variant="partner" />
        <main className="app-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PartnerLayout;