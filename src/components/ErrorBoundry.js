import React from 'react';

class ErrorBoundry extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch = () => {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>This is embarrassing, something broke...</h1>;
    }
    return this.props.children;
  }
};

export default ErrorBoundry;