
import '../../../assets/css/toDoList.css';

import {Card} from 'antd';

import "antd/dist/antd.css";

import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
import Search from "./components/Search";

import {connect} from "react-redux";
import {useState} from "react";

function ToDoListPage({taskList}) {
    const [searchKey, setSearchKey] = useState('');
  const filterTask = taskList.filter((task) => {
    return task.taskName.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
  })

  const rederTaskList = () => {
    if (filterTask.length > 0) {
      return filterTask.map((task, index) => {
        return (
            <TaskItem task={task} key={index} index={index}/>
        )
      })
    } else {
      return (
          <p>
            Không có công việc nào!
          </p>
      )
    }
  }
  return (
      <div className="App">
        <Card
            title="To do list App"
            style={{
              width: "60%",
              margin: '0 auto'
            }}
        >
          <TaskForm type="add"/>
        </Card>
        <Search setSearchKey={setSearchKey}/>
        <div className="task-list">
          {rederTaskList()}
        </div>
      </div>
  );
}

const mapStateToProps = ({taskList, searchKey}) => {
  return {
    taskList,
    searchKey,
  };
};

export default connect(mapStateToProps)(ToDoListPage);