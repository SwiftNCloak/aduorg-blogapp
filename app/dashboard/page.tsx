"use client";
import { Card, CardContent, CardActions, IconButton, Button, Chip, Typography, ButtonGroup } from "@mui/material";
import { Avatar, FormControl, TextField } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import PostCard from "../components/card/card";
import style from './dashboard.module.css'

export default function UserProfilePage() {
  return(
    <div>
      <Navbar />
      <div className={style.dflex}>
        <div className={style.threefourths }>
        <Typography variant="h4">Dashboard</Typography>
        <Card className={style.cardr}>
            <CardContent>
            <div className={style.d_flex}>
            <div className={style.col}>
                <Avatar sx={{ width: 100, height: 100 }}>U</Avatar>
            </div>
            <div className={style.col7}>
              <Typography variant="h6">Welcome back,</Typography>
              <Typography variant="h4">admin</Typography>
              <Chip color="success" label="Admin" />
            </div>
            <div className={style.col}>
            <Button variant="outlined" className={style.btn}>Sign out</Button>
            </div>
            </div>
            </CardContent>
        </Card>
        <Typography variant="h4">Hub Stats</Typography>
        <div className={style.col}>
            <div className={style.dflex}>
              <div className={style.col}>
                <Avatar sx={{ width: 200, height: 200 }}>U</Avatar>
                <Typography variant="h5">Organization Count</Typography>
                </div>
                <div className={style.col}>
                <Avatar sx={{ width: 200, height: 200 }}></Avatar>
                <Typography variant="h5">Moderator Request</Typography>
                </div>
                <div className={style.col}>
                <Avatar sx={{ width: 200, height: 200 }}>U</Avatar>
                <Typography variant="h5">Total Users</Typography>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
