import {
	Article,
	Home,
	ModeNight,
	People,
	Person,
	Settings,
	Storefront,
} from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from "@mui/material";
import React from "react";

function Sidebar({setMode, mode}) {
	return (
		<Box
			flex={1}
			padding={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			<Box position="fixed">
			<List>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#home">
						<ListItemIcon>
							<Home />
						</ListItemIcon>
						<ListItemText primary="Home Page" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#Profile">
						<ListItemIcon>
							<Person />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#friends">
						<ListItemIcon>
							<People />
						</ListItemIcon>
						<ListItemText primary="Friends" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#pages">
						<ListItemIcon>
							<Article />
						</ListItemIcon>
						<ListItemText primary="Pages" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#marketplace">
						<ListItemIcon>
							<Storefront />
						</ListItemIcon>
						<ListItemText primary="Marketplace" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#settings">
						<ListItemIcon>
							<Settings />
						</ListItemIcon>
						<ListItemText primary="Settings" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#settings">
						<ListItemIcon>
							<ModeNight/>
						</ListItemIcon>
						<Switch onChange={(e)=> setMode(mode==="light"?"dark": "light")}/>
					</ListItemButton>
				</ListItem>

			</List>
			</Box>
		</Box>
	);
}

export default Sidebar;
