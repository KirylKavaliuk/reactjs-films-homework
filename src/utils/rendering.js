import React, { Component } from 'react';

function withConditionalRenderingHOC(WrappedComponent, keyField) {
  return class extends Component {
    render() {
      const keyFieldValue = this.props[keyField];
      const component = <WrappedComponent { ...this.props }/>;

      if (keyFieldValue instanceof Array && keyFieldValue.length) {
        return component;
      } if (keyFieldValue !== undefined) {
        return component;
      }

      return null;
    }
  };
}

export default withConditionalRenderingHOC;
