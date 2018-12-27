import React, { Component } from 'react';

const MessageContext = React.createContext();

function withMessageContextHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return (<MessageContext.Consumer>
        {({ openMessage }) => (
          <WrappedComponent
            openMessage={ openMessage }
            { ...this.props }
          />
        )}
      </MessageContext.Consumer>);
    }
  };
}

export const { Provider } = MessageContext;
export const withMessageContext = withMessageContextHOC;
