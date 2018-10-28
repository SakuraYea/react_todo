/**
 * @author zhouzh
 * @date 2018/10/25 2:21 PM
 */

import React , { Component } from 'react';
import store from './store';
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getInitList
} from "./store/actionCreators";
import TodoListUI from './todoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (<TodoListUI
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleInputChange={this.handleInputChange}
                    handleClick={this.handleClick}
                    handleItemDelete={this.handleItemDelete}
                />)
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);
        //redux-thunk
        // const action = getTodoList();
        // store.dispatch(action);


    }

    handleInputChange(e){
        e.persist();
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleItemDelete(index){
        const aciton = getDeleteItemAction(index);
        store.dispatch(aciton);
    }

}

export default TodoList;
