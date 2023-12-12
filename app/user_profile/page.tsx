"use client";

import Typography, { Avatar, FormControl, TextField } from "@mui/material";
import Navbar from "../components/navbar/navbar";

export default function UserProfilePage() {
  return(
    <div>
      <Navbar />
      <div>
        <Avatar ></Avatar>
      </div>

      <div>
        <FormControl>
          <TextField variant="filled"/>
          <TextField variant="filled"/>
          <TextField variant="filled"/>
        </FormControl>
      </div>
    </div>
  )
}
