import { Article, Home, Inbox, People, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

function Sidebar() {
	return (
		<Box
			bgcolor="yellow"
			flex={1}
			padding={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#home">
						<ListItemIcon>
							<Home/>
						</ListItemIcon>
						<ListItemText primary="Home Page" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#Profile">
						<ListItemIcon>
							<Person/>
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItemButton>
				</ListItem>

				

				<ListItem disablePadding>
					<ListItemButton component="a" href="#friends">
						<ListItemIcon>
							<People/>
						</ListItemIcon>
						<ListItemText primary="Friends" />
					</ListItemButton>
				</ListItem>


				<ListItem disablePadding>
					<ListItemButton component="a" href="#pages">
						<ListItemIcon>
							<Article/>
						</ListItemIcon>
						<ListItemText primary="Pages" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#marketplace">
						<ListItemIcon>
							<Storefront/>
						</ListItemIcon>
						<ListItemText primary="Marketplace" />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton component="a" href="#settings">
						<ListItemIcon>
							<Settings/>
						</ListItemIcon>
						<ListItemText primary="Settings" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}

export default Sidebar;
