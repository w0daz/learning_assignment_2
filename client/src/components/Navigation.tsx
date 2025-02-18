import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="w-1/4 bg-gray-100 p-6 shadow-md min-h-screen">
      <h1 className="text-2xl font-bold mb-4">WhatToDoApp</h1>
      <nav className="space-y-4">
        <Link to="/" className="btn btn-outline btn-block">
          Dashboard
        </Link>
        <Link to="/tasks" className="btn btn-primary btn-block">
          Tasks
        </Link>
      </nav>
    </aside>
  );
};

export default Navigation;
