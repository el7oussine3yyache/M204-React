import ListArticles from "./ListArticles";
import ArticleDispatch from "./ArticleDispatch";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Redux State Management</h1>
      <ArticleDispatch />
      <hr />
      <ListArticles />
    </div>
  );
}
