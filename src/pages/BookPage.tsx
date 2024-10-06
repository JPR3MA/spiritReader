import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function BookPage() {
  const params = useParams<{ bookId: string }>();
  return (
    <div>
      <h1>Book {params.bookId}</h1>
      <Link to="/">Home</Link>
      <Link to={`/book/${params.bookId}/chapter/1`}>Chapter 1</Link>
    </div>
  );
}