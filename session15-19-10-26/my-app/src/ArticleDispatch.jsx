import { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticleAction } from "./redux/actions/articleActions";

export default function ArticleDispatch() {
  const dispatch = useDispatch();

  const [designation, setDesignation] = useState("");
  const [famille, setFamille] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      id: Date.now(),
      designation,
      famille
    };

    dispatch(addArticleAction(newArticle));

    setDesignation("");
    setFamille("");
  };

  return (
    <div style={{ margin: "20px 0", padding: "15px", border: "1px solid #ccc" }}>
      <h3>Add New Article</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Designation: </label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Famille: </label>
          <input
            type="text"
            value={famille}
            onChange={(e) => setFamille(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
}
