const initialState = {
  user: {
    id: 1,
    username: "Amine"
  },
  articles: [
    {
      id: 1,
      designation: "Mouse",
      famille: "Consomable"
    },
    {
      id: 2,
      designation: "keyboard",
      famille: "Consomable"
    }
  ],
  Categorie: [],
  Fournisseur: []
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "AJOUTER_ARTICLE":
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };

    case "MODIFIER_ARTICLE": {
      const updatedArticles = state.articles.map(function (article) {
        if (article.id === parseInt(action.payload.id)) {
          return action.payload;
        }
        return article;
      });
      return {
        ...state,
        articles: updatedArticles
      };
    }

    case "SUPPRIMER_ARTICLE": {
      const filteredArticles = state.articles.filter(function (item) {
        return item.id !== action.payload;
      });
      return {
        ...state,
        articles: filteredArticles
      };
    }

    default:
      return state;
  }
}

export default articleReducer;
