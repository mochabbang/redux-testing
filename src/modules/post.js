import axios from "axios";

function getPostAPI(postId) {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = "post/GET_POST_PENDING";
const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
const GET_POST_FAILURE = "post/GET_POST_FAILURE";

export const getPost = (postId) => async (dispatch) => {
  dispatch({ type: GET_POST_PENDING });
  try {
    const response = await getPostAPI(postId);
    dispatch({ type: GET_POST_SUCCESS, payload: response });
    return response;
  } catch (e) {
    dispatch({ type: GET_POST_FAILURE, payload: e });
  }
};

const initialState = {
  fetching: false,
  error: false,
  title: "",
  body: "",
};

function post(state = initialState, action) {
  switch (action.type) {
    case GET_POST_PENDING:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        fetching: false,
        title: action.payload.title,
        body: action.payload.body,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    default:
      return state;
  }
}

export default post;
