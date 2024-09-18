import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      hasRendered: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the component has not rendered before and there is no error
    if (!prevState.hasRendered && !this.state.hasError) {
      // Mark the component as rendered after the initial render
      this.setState({ hasRendered: true });
    }
  }

  render() {
    if (this.state.hasError) {
      return <div>Error occurred. Please try again.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;