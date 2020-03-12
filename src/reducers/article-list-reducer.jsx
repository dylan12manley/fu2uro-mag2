import constants from './../constants';

const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { title,
          author,
          publishDate,
          articleBody,
          mainImage,
          otherImage,
          catagory,
          id } = action;

  switch (action.type) {
  case c.ADD_ARTICLE:
    newState = Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        publishDate: publishDate,
        articleBody: articleBody,
        mainImage: mainImage,
        id: id
      }
    });
    return newState;

  case c.UPDATE_TIME:
    const newArticle = Object.assign({}, state[id]);
    newState = Object.assign({}, state, {
      [id]: newArticle
    });
    return newState;

  default:
    return state;
  }
};
