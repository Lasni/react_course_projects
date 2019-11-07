import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <Comment author='Grega' date="Today at 3:45" avatar={faker.image.avatar()} />
    </ApprovalCard>

    <ApprovalCard>
      <Comment author='Burek' date="Today at 5:41" avatar={faker.image.avatar()} />
    </ApprovalCard>
    <ApprovalCard>
      <Comment author='Mujko' date="Today at 5:55" avatar={faker.image.avatar()} />
    </ApprovalCard>
  </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))