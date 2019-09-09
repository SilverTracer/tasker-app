import * as React from 'react';

import { Props } from '../../../containers/tasks';
import { Button, Typography } from '../../ui';

import Sidebar from './sidebar';
import Header from './header';
import Add from './add';
import * as css from './main.module.css';

class TasksPage extends React.Component<Props> {
  mountpoint : React.RefObject<HTMLDivElement>;

  constructor(props : Props) {
    super(props);

    this.mountpoint = React.createRef();
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
          <Header mountpoint={this.mountpoint}>
            <div className={css.controls}>
              <Add
                mountpoint={this.mountpoint}
                className={css.control_item}
                onSubmit={this.props.putTask}
              />
              {/* Here should be search later */}
            </div>
          </Header>
          <div className={css.body} ref={this.mountpoint}>
            <h3>Tasks</h3>
            {this.mapTasks()}
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default TasksPage;
