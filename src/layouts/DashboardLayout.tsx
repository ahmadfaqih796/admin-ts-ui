import { Outlet, Link } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet /> {/* Halaman akan dirender di sini */}
      </main>
    </div>
  );
};

export default DashboardLayout;
