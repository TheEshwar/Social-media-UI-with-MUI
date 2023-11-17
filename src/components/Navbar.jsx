import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

function Navbar() {

  const [open, setOpen] = useState(false);

	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography
					variant="h6"
					sx={{ display: { xs: "none", sm: "block" } }}
				>
					Facebook
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="Search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar
						src="https://www.flaticon.com/free-icon/profile-user_64572?term=profile&page=1&position=1&origin=tag&related_id=64572"
						sx={{ width: "30", height: "30" }}
            onClick={(e) => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={(e) => setOpen(true)}>
					<Avatar
						src="https://www.flaticon.com/free-icon/profile-user_64572?term=profile&page=1&position=1&origin=tag&related_id=64572"
						sx={{ width: "30", height: "30" }}
					/>
          <Typography variant="span">John</Typography>
				</UserBox>
			</StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
		sx={{marginTop: 5}}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
		</AppBar>
	);
}

export default Navbar;
