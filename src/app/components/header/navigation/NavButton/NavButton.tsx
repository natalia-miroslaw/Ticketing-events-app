export {};

// import React from 'react';
// import { Button, Menu, MenuItem, Fade } from '@mui/material';
//
// export const NavButton: React.FC = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//
//   return (
//     <div>
//       <Button
//         id="fade-button"
//         aria-controls={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}>
//         Dashboard
//       </Button>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           'aria-labelledby': 'fade-button'
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}>
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// };
