/**
 * @author zhouzh
 * @date 2018/10/27 7:23 PM
 */
import {INIT_LIST_ACTION, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_LIST} from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = ()=> ({
   type:ADD_TODO_ITEM
});

export const getDeleteItemAction = (index)=> ({
   type:DELETE_TODO_ITEM,
   index
});

export const initListAction = (data)=> ({
    type:INIT_LIST_ACTION,
    data
});

export const getInitList = ()=> ({
   type:GET_INIT_LIST
});

//redux-thunk
// export const getTodoList = () => {
//     return (dispatch)=> {
//         setTimeout(()=>{
//             const action = initListAction(['cat','monkey','bird']);
//             dispatch(action);
//         },1000);
//     }
// };


