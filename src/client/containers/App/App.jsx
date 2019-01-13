import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

import { Provider as DialogProvider } from 'utils/dialog';
import { Provider as MessageProvider } from 'utils/message';

import MoviesList from 'containers/MoviesList/MoviesList';
import MovieDetails from 'containers/MovieDetails/MovieDetails';

import Select from 'components/Select/Select';
import Loading from 'components/Loading/Loading';
import Footer from 'components/Footer/Footer';
import Dialog from 'components/Dialog/Dialog';
import Rating from 'components/Rating/Rating';
import Message from 'components/Message/Message';

import request from 'utils/request';

import actionsGenres from 'actions/genres';

import 'normalize.css';
import styles from './App.scss';
import 'styles/index.scss';

class App extends Component {
  state = {
    search: '',
    dialog: {
      open: false,
      component: null,
    },
    message: {
      open: false,
      text: '',
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
        message: '',
      },
    });
  }

  componentDidMount = () => {
    this.props.addGenres();
  }

  changeSearchHandler = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    const commonProps = {
      match: this.props.match,
      genres: this.props.genres,
    };

    return (
      <div className={ styles.app }>
        <DialogProvider value={{ openDialog: this.openDialogHandler }}>
          <MessageProvider value={{ openMessage: this.openMessageHandler }}>
            <MovieDetails
              { ...commonProps }
            />
            <MoviesList
              { ...commonProps }
            />
          </MessageProvider>
        </DialogProvider>

        <Dialog
          open={ this.state.dialog.open }
          component={ this.state.dialog.component }
          closeDialog={ this.closeDialogHandler }
        />

        <Message
          message={ this.state.message }
          closeMessage={ this.closeMessageHandler }
        />

        <Footer/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addGenres: () => dispatch(actionsGenres.addGenres()),
});

const mapStateToProps = state => ({
  genres: state.genres,
});

export default hot(module)(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
));
