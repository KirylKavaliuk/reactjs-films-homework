import React, { Component } from 'react';

const DialogContext = React.createContext();

function withDialogContextHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return (<DialogContext.Consumer>
        {({ openDialog }) => (
          <WrappedComponent
            openDialog={ openDialog }
            { ...this.props }
          />
        )}
      </DialogContext.Consumer>);
    }
  };
}

export const { Provider } = DialogContext;
export const withDialogContext = withDialogContextHOC;
