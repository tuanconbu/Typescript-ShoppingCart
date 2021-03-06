import { all, fork } from "redux-saga/effects";
import productSagas from "store/Products/sagas";
import voucherSagas from "store/Vouchers/sagas";

export default function* rootSagas() {
  yield all([fork(productSagas)]);
  yield all([fork(voucherSagas)]);
}
