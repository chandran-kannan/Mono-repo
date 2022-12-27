const sampleReducer = (
  state = {
    loading: false,
    samples: null,
    error: null,
  },
  action: any
) => {
  switch (action.type) {
    case "SET_SAMPLE_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_SAMPLE_DATA":
      return {
        ...state,
        samples: action.payload.samples,
      };
    case "RESET":
      return {
        ...state,
        loading: false,
        samples: null,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sampleReducer;
