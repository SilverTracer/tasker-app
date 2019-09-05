import * as React from 'react';

import { Props } from '../../../containers/tasks';
import { Button } from '../../ui';

import Form from './add_form';

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
        <p>{task.description}</p>
        <Button
          color="cream"
          onClick={() => this.props.deleteTask({ id: task.id })}
        >
          Delete
        </Button>
      </div>
    ));
  }

  render() {
    return (
      <>
        <div>
          <h3>Tasks</h3>
          {this.mapTasks()}
        </div>
        <div>
          <h4>Add task</h4>
          <Form
            onSubmit={this.props.putTask}
          />
        </div>
      </>
    );
  }
}

export default TasksPage;