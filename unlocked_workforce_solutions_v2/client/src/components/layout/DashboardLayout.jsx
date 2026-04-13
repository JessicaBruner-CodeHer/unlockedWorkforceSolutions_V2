import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <main className="dashboard-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;