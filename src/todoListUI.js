/**
 * @author zhouzh
 * @date 2018/10/28 11:48 AM
 */

import React from 'react';
import { Input,Button,List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{ padding:'10px' }}>
            <Input
                onChange={props.handleInputChange }
                value={ props.inputValue }
                placeholder="todo info" style={{ width:'300px',marginRight:'10px' }}/>
            <Button type="primary" onClick={ props.handleClick }>提交</Button>
            <List
                style={{ marginTop:'10px',width:'300px' }}
                bordered
                dataSource={ props.list }
                renderItem={(item,index) => (<List.Item onClick={()=>
                {
                    props.handleItemDelete(index) }}>{item}</List.Item>)
                }
                />
        </div>
    )
};

// class TodoListUI extends Component {
//     render(){
//         return (<div style={{ padding:'10px' }}>
//             <Input
//                 onChange={ this.props.handleInputChange }
//                 value={ this.props.inputValue }
//                 placeholder="todos info" style={{ width:'300px',marginRight:'10px' }}/>
//             <Button type="primary" onClick={ this.props.handleClick }>提交</Button>
//             <List
//                 style={{ marginTop:'10px',width:'300px' }}
//                 bordered
//                 dataSource={ this.props.list }
//                 renderItem={(item,index) => (<List.Item onClick={(e,index)=>
//                 {
//                     e.persist();
//                     this.props.handleItemDelete(index) }}>{item}</List.Item>)
//                 }
//                 />
//         </div>)
//     }
// }

export default TodoListUI;
