import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { grey } from '@material-ui/core/colors';
import history from '../../History'

const options = [
  'Mon profile',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
   
  };
  const redirect = () => {
    history.push('/profil')
    window.location.reload()
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        
      >
        <MoreVertIcon style={{ color: grey[50] }}  fontSize="large"/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '10ch'
          
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option}  selected={option === 'Pyxis'} onClick={redirect}>
            <strong>{option}</strong>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}