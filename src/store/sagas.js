/**
 * @author zhouzh
 * @date 2018/10/28 10:59 PM
 */

import { put, takeEvery } from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import { initListAction } from "./actionCreators";

function ajax() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['cat','monkey','bird']);
        },1000);
    });
}

function* getInitList() {
    try {
        const res = yield ajax();
        const action = initListAction(res);
        yield put(action);
    }catch (e) {
        console.log(e);
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST,getInitList);
}

export default mySaga;