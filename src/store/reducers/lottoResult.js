import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const lottoResult = createSlice({
  name: "lottoResult",
  initialState: {
    results: null,
  },
  reducers: {
    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { updateResults } = lottoResult.actions;

export const fetchResults = () => async (dispatch) => {

  const res = await axios({
    url: "http://media.lottoland.com/api/drawings/euroJackpot",
  });
  dispatch(updateResults(res.data));

  // The rest are examples with fetch and XMLHttpRequest:
  
  // const xhr = new XMLHttpRequest();
  // let json_obj;
  // xhr.open('POST', "https://media.lottoland.com/api/drawings/euroJackpot", true);
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200) {
  //       json_obj = JSON.parse(xhr.responseText);
  //       console.log(json_obj);
  //     }
  //   }
  // }
  // xhr.send(null);

  // const myInit = {
  //   mode: "no-cors",
  // };
  // const testURL = "https://media.lottoland.com/api/drawings/euroJackpot";
  // const myRequest = new Request(testURL, myInit);
  // const RI = new RequesInfo()
  // fetch(testURL, {
  //   mode: "no-cors", // 'cors' by default
  // })
  //   .then((res) => res.json())
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch(function (e) {
  //     console.log(e);
  //   });
  // .then((res) => res.json())
  // .then((result) => {
  //   console.log(result);
  //   dispatch(updateResults(result));
  // });

  // const req = new XMLHttpRequest();
  // req.onreadystatechange = () => {
  //   if (this.target.readyState === 4 && this.target.status === 200) {
  //     dispatch(updateResults(this.responseText))
  //   }
  // }
  // req.open('GET', 'https://media.lottoland.com/api/drawings/euroJackpot', true);

  
};

export const lottoResults = (state) => state.lottoResult.results;

export default lottoResult.reducer;
