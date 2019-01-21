import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

import { Provider as DialogProvider } from 'utils/dialog';
import { Provider as MessageProvider } from 'utils/message';

import MovieDetails from 'containers/MovieDetails/MovieDetails';

import Footer from 'components/Footer/Footer';
import Dialog from 'components/Dialog/Dialog';
import Message from 'components/Message/Message';
import Routing from 'components/Routing/Routing';

import actionsGenres from 'actions/genres';

import 'normalize.css';
import styles from './App.scss';
import 'styles/index.scss';

const dialogNode = document.getElementById('dialog');
const messageNode = document.getElementById('notification');

class App extends Component {
  state = {
    dialog: {
      open: false,
      component: null,
    },
    message: {
      open: false,
      text: null,
    },
  };

  openDialogHandler = (component) => {
    this.setState({
      dialog: {
        open: true,
        component,
      },
    });
  }

  closeDialogHandler = () => {
    this.setState({
      dialog: {
        open: false,
        component: null,
      },
    });
  }

  openMessageHandler = (text) => {
    this.setState({
      message: {
        open: true,
        text,
      },
    });
  }

  closeMessageHandler = () => {
    this.setState({
      message: {
        open: false,
        text: null,
      },
    });
  }

  componentDidMount = () => {
    this.props.addGenres();
  }

  render() {
    return (
      <div className={ styles.app }>
        <DialogProvider
          value={{
            openDialog: this.openDialogHandler,
            closeDialog: this.closeDialogHandler,
          }}
        >
          <MessageProvider value={{ openMessage: this.openMessageHandler }}>
            <MovieDetails/>
            <Routing/>
          </MessageProvider>
        </DialogProvider>

        { ReactDOM.createPortal(
          <Dialog
            open={ this.state.dialog.open }
          >
            { this.state.dialog.component }
          </Dialog>,
          dialogNode,
        ) }

        { ReactDOM.createPortal(
          <Message
            open={ this.state.message.open }
            text={ this.state.message.text }
            closeMessage={ this.closeMessageHandler }
          />,
          messageNode,
        ) }
        <Footer/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addGenres: () => dispatch(actionsGenres.addGenres()),
});

const mapStateToProps = state => ({ });

export default hot(module)(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
));
