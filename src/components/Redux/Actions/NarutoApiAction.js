import { NARUTO_API } from "../Constant";

export const narutoApi = () => async (dispatch) => {
  let res = await fetch("https://api.jikan.moe/v3/search/anime?q=naruto")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
//   console.log(res);
  dispatch({
    type: NARUTO_API,
    payload: res,
  });
};
