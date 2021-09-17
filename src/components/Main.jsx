import React from 'react';
import withSubscription from './withSubscription';
import dataSource from './DataSource';

class Main extends React.Component {
  render() {
    const { comments } = this.props.data;
    return (
      <div className="box">
        <h1>Hellow world!!</h1>
        {/* <pre>{JSON.stringify(comments, null, 10)}</pre> */}
        <ol>
          {comments.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default withSubscription(Main, dataSource);
