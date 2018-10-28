/**
 * @author zhouzh
 * @date 2018/10/25 7:53 PM
 */
import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sages from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(sages);

export default store;


//redux-thunk
// import thunk from 'redux-thunk';
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
// );


