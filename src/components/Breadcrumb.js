import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <nav className="text-sm">
      <ol className="breadcrumb-list flex">
        <li className="text-violet-500 hover:text-violet-700">
          <Link to="/">Home /</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="text-violet-500 hover:text-violet-700">
            <Link to={`/${pathSegments.slice(0, index + 1).join(' /')}`}>{segment}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
