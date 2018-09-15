import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function SimpleAppBar(props) {

  return (
    <div className='appBar'>
      <AppBar position="static" color='primary' className='app-bar'>
        <Toolbar >
            <Typography variant="title" color='inherit' className='bar-text'>
                Open RoomRoster Pull Requests - Ready For Review
            </Typography>
      </Toolbar>
      </AppBar>
    </div>
  );
}


export default SimpleAppBar;
