import { BrowserRouter } from 'react-router-dom';
import AppProviders from './app/appProviders';
import AppRoutes from './app/appRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;