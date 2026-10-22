export function addArticleAction(newArticle) {
  return ({
    type: "AJOUTER_ARTICLE",
    payload: newArticle
  })
}

export function updateArticleAction(newArticle) {
  return ({
    type: "MODIFIER_ARTICLE",
    payload: newArticle
  })
}

export function deleteArticleAction(articleId) {
  return ({
    type: "SUPPRIMER_ARTICLE",
    payload: articleId
  })
}
