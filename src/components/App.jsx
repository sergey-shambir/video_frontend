import React from 'react'
import VideoListContainer from '../containers/VideoListContainer'
import VideoDetailedContainer from '../containers/VideoDetailedContainer'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import * as view from '../routing/views'
import { LinearProgress } from 'material-ui/Progress';
import ErrorMessageContainer from '../containers/ErrorMessageContainer'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  preloader: {
    marginBottom: -5
  }
};

function App (props) {

  const { classes, currentView, onBackButtonClick, loading, error } = props;
  const isDetailedView = (currentView === view.DETAILED);
  let renderContent = () => {
    switch (currentView) {
      case view.DETAILED:
        return <VideoDetailedContainer/>;
      case view.LIST:
        return <VideoListContainer/>;
    }
  };

  return(
    <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography type="title" color="inherit" className={classes.flex}>
          Go workshop 2018
        </Typography>
        {isDetailedView ? <Button onClick={onBackButtonClick} color="inherit">Back to list</Button> : ''}
      </Toolbar>
    </AppBar>
    {loading ? <LinearProgress className={classes.preloader} mode="query" /> : ''}
    {error !== '' ? <ErrorMessageContainer /> : ''}
    {renderContent()}
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  currentView: PropTypes.string,
  onBackButtonClick: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default withStyles(styles)(App)