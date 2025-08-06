import { BrowserRouter } from 'react-router-dom';

import { DashboardProvider } from '@/context';
import { AppRouter } from '@/routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <AppRouter />
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
