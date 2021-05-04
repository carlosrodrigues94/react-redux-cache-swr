import { all, delay, takeLatest } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { ActionTypes } from "./types";

export function* gitHubUserShow(): SagaIterator {
  try {
    yield delay(1000);

    console.log("Success");
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest(ActionTypes.SHOW_REQUEST, gitHubUserShow)]);
