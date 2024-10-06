import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/">Home</Link>
      <Link to="/book/1">Book 1</Link>
      <Link to="/book/2">Book 2</Link>
      <Link to="/book/3">Book 3</Link>
      <Link to="/book/4">Book 4</Link>
    </div>
  );
}