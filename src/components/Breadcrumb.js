import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();
  // Split the pathname to extract each segment
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        {/* Home breadcrumb item */}
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {/* Dynamic breadcrumb items for each segment */}
        {pathSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {/* Generate breadcrumb item with link */}
            <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
