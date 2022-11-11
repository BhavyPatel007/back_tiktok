import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const postTelent = createAsyncThunk('postTelent/getpostTelent', async (request) => {
  

const myHeaders = new Headers();
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(request?.data),
    redirect: 'follow',
  };


  return (
    fetch('https://10acb4dfc9.execute-api.ap-southeast-1.amazonaws.com/dev/getdata', requestOptions)
      .then((res) => res.json())
      // .then((response) => response.json())
      .then((result) => {
        request.onSuccess(result.data);
        // console.log('LoginMsg', result.data.message);
        // localStorage.setItem('Token', result.data.token);
        // console.log('resultt', result);
      })
      .catch((error) => {
        // console.log('error', error);
        request.onFail(error);
        // console.log('LoginError', error.message);
        // alert(error.message);
      })
  );
});
const getpostTelentSlice = createSlice({
  name: 'upload',
  initialState: {
    loginData: null,
    loading: false,
  },
  extraReducers: {
    [postTelent.pending]: (state, action) => {
      state.loading = true;
    },
    [postTelent.fulfilled]: (state, action) => {
      state.loading = false;
      state.loginData = action.payload;
    },
    [postTelent.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});
export default getpostTelentSlice.reducer;
