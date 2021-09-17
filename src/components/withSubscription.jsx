import React from 'react';
// import dataSource from './DataSource';

function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        comments: selectData.getComments(),
      };
    }

    componentDidMount() {
      selectData.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      selectData.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        comments: selectData.getComments(),
      });
    }

    render() {
      return <WrappedComponent data={this.state} {...this.props} />;
    }
  };
}

export default withSubscription;
