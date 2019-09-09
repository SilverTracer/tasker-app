import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Props } from '../../../containers/tasks';
import { Button, Icon, Typography } from '../../ui';

import Sidebar from './sidebar';
import Header from './header';
import Form from './add_form';
import * as css from './main.module.css';

class TasksPage extends React.Component<Props> {
  constructor(props : Props) {
    super(props);
  }

  componentDidMount() {
    const { tasks, getTasks } = this.props;

    if (!tasks.tasks.length) {
      getTasks();
    }
  }

  removeTast() {
  }

  mapTasks() {
    const { tasks: { tasks } } = this.props;

    return tasks.map(task => (
      <div key={task.id}>
        <h4>{task.title}</h4>
        <p>{task.description}, completed = {task.status.completed.toString()}</p>
        <Button
          color="cream"
          onClick={() => this.props.deleteTask({ id: task.id })}
        >
          Delete
        </Button>
        <Typography tag="span" color="ash" weight="light">or</Typography>
        <Button
          color="sky"
          onClick={() => this.props.toggleTask({ id: task.id, completed: !task.status.completed })}
        >
          Complete
        </Button>
      </div>
    ));
  }

  render() {
    return (
      <div className={css.layout}>
        <div className={css.content}>
          <Header />
          <div className={css.body}>
            <h3>Tasks</h3>
            {this.mapTasks()}
            <Form
              onSubmit={this.props.putTask}
            />
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default TasksPage;
