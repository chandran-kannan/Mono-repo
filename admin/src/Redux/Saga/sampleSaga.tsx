import { all, put, takeEvery } from "redux-saga/effects";
import store from "../Store/store";

export const actionTypes = {
  SET_SAMPLE: "SET_SAMPLE",
};

export const sampleActions = {
  setSample: (data: string) => {
    store.dispatch({
      type: actionTypes.SET_SAMPLE,
      payload: {
        data: data,
      },
    });
  },
};

function* setSampleWorker(action: any) {
  try {
    yield put({
      type: "SET_SAMPLE_DATA",
      payload: {
        samples: action.payload.data,
      },
    });
  } catch (error) {}
}

export function* sampleWatcher() {
  yield all([takeEvery("SET_SAMPLE", setSampleWorker)]);
}
