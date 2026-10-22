import { useSelector, useDispatch } from "react-redux";
import { deleteArticleAction } from "./redux/actions/articleActions";

export default function ListArticles() {
  const list_article = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteArticleAction(id));
  };

  return (
    <div>
      <h2>List of Articles ({list_article.length})</h2>
      {list_article.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul>
          {list_article.map((article) => (
            <li key={article.id} style={{ marginBottom: "8px" }}>
              <strong>{article.designation}</strong> ({article.famille}){' '}
              <button onClick={() => handleDelete(article.id)} style={{ color: "red" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
