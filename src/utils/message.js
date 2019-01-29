import React, { Component } from 'react';

const MessageContext = React.createContext();

function withMessageContextHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return (<MessageContext.Consumer>
        {({ ...props }) => (
          <WrappedComponent { ...props } { ...this.props }
          />
        )}
      </MessageContext.Consumer>);
    }
  };
}

export const { Provider } = MessageContext;
export const withMessageContext = withMessageContextHOC;
