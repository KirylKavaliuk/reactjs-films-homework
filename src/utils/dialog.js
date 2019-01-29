import React, { Component } from 'react';

const DialogContext = React.createContext();

function withDialogContextHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return (<DialogContext.Consumer>
        {({ ...props }) => (
          <WrappedComponent { ... props } { ...this.props }/>
        )}
      </DialogContext.Consumer>);
    }
  };
}

export const { Provider } = DialogContext;
export const withDialogContext = withDialogContextHOC;
