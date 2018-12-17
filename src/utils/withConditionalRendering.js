import React, { Component } from 'react';

export default function withConditionalRendering(WrappedComponent, keyFields) {
  return class extends Component {
    render() {
      if (keyFields.every(field => this.props[field] !== undefined)) {
        return <WrappedComponent { ...this.props }/>;
      }

      return null;
    }
  };
}
