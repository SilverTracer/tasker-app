import * as React from 'react';

import { Props } from '../../../containers/tasks';

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

  mapTasks() {
    const { tasks: { tasks } } = this.props;

    return tasks.map(task => (
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
    ));
  }

  putTask() {

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
