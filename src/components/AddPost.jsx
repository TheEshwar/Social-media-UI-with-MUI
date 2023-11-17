import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
	styled,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "20px",
});

function AddPost() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Tooltip
				onClick={(e) => setOpen(true)}
				title="Add Post"
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: "calc(50% - 25px)", md: 30 },
				}}
			>
				<Fab color="primary">
					<Add />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={400}
					height={280}
					p={3}
					borderRadius={5}
          bgcolor={"background.default"} color={"text.primary"}
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Add Post
					</Typography>
					<UserBox>
						<Avatar src="https://www.flaticon.com/free-icon/profile-user_64572?term=profile&page=1&position=1&origin=tag&related_id=64572" />
						<Typography fontWeight={500} variant="span">
							John Doe
						</Typography>
					</UserBox>

					<TextField
						multiline
						rows={4}
            placeholder="Post something beautiful"
            variant="standard"
            sx={{width: "100%"}}
					/>
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth >
            <Button>Post</Button>
            <Button sx={{width: "100px"}}><DateRange/></Button>
          </ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
}

export default AddPost;
