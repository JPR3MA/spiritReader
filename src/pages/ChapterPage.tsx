import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ChapterPage() {
  const params = useParams<{ bookId: string, chapterId: string }>();
  return (
    <div>
      <h1>Chapter {params.chapterId} of Book {params.bookId}</h1>
      <Link to="/">Home</Link>
      <Link to={`/book/${params.bookId}`}>{`Book ${params.bookId}`}</Link>
      <Link to={`/book/${params.bookId}/chapter/${parseInt(params.chapterId)-1}`}>Previous Chapter</Link>
      <Link to={`/book/${params.bookId}/chapter/${parseInt(params.chapterId)+1}`}>Next Chapter</Link>
    </div>
  );
}