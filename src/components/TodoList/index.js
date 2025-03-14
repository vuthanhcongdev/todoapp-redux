import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import { todoSlice } from './TodoSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [todoPriority, setTodoPriority] = useState('Medium');

  const todoList = useSelector(todosRemainingSelector);
  
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        title: todoName,
        priority: todoPriority,
        completed: false,
      }
  ));

    setTodoName('');
    setTodoPriority('Medium');
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }

  const handleTodoPriority = (value) => {
    setTodoPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} todoId={todo.id} name={todo.title} prioriry={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={todoPriority} onChange={handleTodoPriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
