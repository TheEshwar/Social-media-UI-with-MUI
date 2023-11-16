import { Box } from "@mui/material";
import React from "react";

function Rightbar() {
	return (
		<Box
			bgcolor="#e1f05b"
			flex={2}
			padding={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			Rightbar
		</Box>
	);
}

export default Rightbar;
