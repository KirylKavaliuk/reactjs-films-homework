import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

import addGenres from 'actions/genres';

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
    this.setState({ dialog: { open: true, component } });
  }

  closeDialogHandler = () => {
    this.setState({ dialog: { open: false, component: null } });
  }

  openMessageHandler = (text) => {
    this.setState({ message: { open: true, text } });
  }

  closeMessageHandler = () => {
    this.setState({ message: { open: false, text: null } });
  }

  componentDidMount = () => {
    this.props.addGenres();
  }

  render() {
    const { dialog, message } = this.state;
    const { location: { pathname } } = window;

    return (
      <div className={ styles.app }>
        <DialogProvider value={{
          openDialog: this.openDialogHandler,
          closeDialog: this.closeDialogHandler,
        }}>
          <MessageProvider value={{ openMessage: this.openMessageHandler }}>
            <MovieDetails
              pathname={ pathname }
            />
            <Routing/>
          </MessageProvider>
        </DialogProvider>

        { ReactDOM.createPortal(
          <Dialog open={ dialog.open }>
            { dialog.component }
          </Dialog>,
          dialogNode,
        ) }

        { ReactDOM.createPortal(
          <Message
            open={ message.open }
            text={ message.text }
            closeMessage={ this.closeMessageHandler }
          />,
          messageNode,
        ) }
        <Footer/>
      </div>
    );
  }
}

MovieDetails.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addGenres: () => dispatch(addGenres()),
});

const mapStateToProps = state => ({ });

export default hot(module)(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
));
