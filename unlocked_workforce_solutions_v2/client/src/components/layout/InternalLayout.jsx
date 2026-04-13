import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function InternalLayout() {
  return (
    <div className="internal-layout">
      <Navbar />
      <div className="internal-layout__body">
        <Sidebar />
        <main className="internal-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default InternalLayout;