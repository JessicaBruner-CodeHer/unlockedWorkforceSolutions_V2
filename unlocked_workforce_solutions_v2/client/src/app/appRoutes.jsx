import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout';
import DashboardLayout from '../components/layout/DashboardLayout';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import LandingPage from '../pages/public/LandingPage';
import LoginPage from '../pages/public/LoginPage';
import DashboardPage from '../pages/protected/DashboardPage';
import EventsPage from '../pages/protected/EventsPage';
import JobsPage from '../pages/protected/JobsPage';
import PartnersPage from '../pages/protected/PartnersPage';
import ParticipantsPage from '../pages/protected/ParticipantsPage';
import DocumentsPage from '../pages/protected/DocumentsPage';
import ResumeBuilderPage from '../pages/protected/ResumeBuilderPage';
import AdminPage from '../pages/protected/AdminPage';
import NotAuthorizedPage from '../pages/protected/NotAuthorizedPage';
import NotFoundPage from '../pages/protected/NotFoundPage';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/resumes" element={<ResumeBuilderPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="/unauthorized" element={<NotAuthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;