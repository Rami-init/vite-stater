import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
}

export default NotFound;
