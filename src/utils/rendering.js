import React, { Component } from 'react';

export function withConditionalRendering(WrappedComponent, keyField) {
  return class extends Component {
    render() {
      const keyFieldValue = this.props[keyField];
      const component = <WrappedComponent { ...this.props }/>;

      if (keyFieldValue instanceof Array && keyFieldValue.length) {
        return component;
      }

      if (keyFieldValue !== undefined && keyFieldValue !== null) {
        return component;
      }

      return null;
    }
  };
}

export function withAnimation(WrappedComponent) {
  return class extends Component {
    render() {
      return <WrappedComponent { ...this.props }/>;
    }
  };
}
