import { Routes, Route } from 'react-router-dom';
import Root from './routes/Root';
import Dashboard from './routes/Dashboard';
import Tasks from './routes/Tasks';
import ErrorPage from './routes/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;