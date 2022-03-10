let initialState = {
  Adddata: [],
};

let reducers = (state = initialState, action) => {
  switch (action.type) {
    case "AddData":
      return {
        ...state,
        Adddata: action.payload,
      };
  }
};


export default reducers;