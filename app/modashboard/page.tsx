"use client";
import { Card, CardContent, CardActions, IconButton, Button, Chip, Typography, ButtonGroup } from "@mui/material";
import { Avatar, FormControl, TextField } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from "../components/navbar/navbar";
import PostCard from "../components/card/card";
import style from './modashboard.module.css';


export default function ModDashboard() {
  return(
    <div>
      <Navbar />
      <div className={style.dflex}>
        <div className={style.threefourths }>
        <Typography variant="h4">Moderators</Typography>
        <Card className={style.cardr}>
            <CardContent>
            <div className={style.d_flex}>
            <div className={style.col}>
                <Avatar sx={{ width: 100, height: 100 }}>U</Avatar>
            </div>
            <div className={style.col}>
            <Card className={style.cardr2}>
                <CardContent>
                <Typography variant="h6">Name</Typography>
                <Typography variant="h6">Student No</Typography>
                <Typography variant="h6">Org</Typography>
                <Typography variant="h6">Email</Typography>
                </CardContent>
                </Card>
            </div>
            </div>
            </CardContent>
        </Card>
        </div>

        <div className={style.threefourths }>
        <Card className={style.cardr}>
            <CardContent>
            <div className={style.d_flex}>
            <div className={style.col}>
                <Avatar sx={{ width: 100, height: 100 }}>U</Avatar>
            </div>
            <div className={style.col}>
            <Card className={style.cardr2}>
                <CardContent>
                <Typography variant="h6">Name</Typography>
                <Typography variant="h6">Student No</Typography>
                <Typography variant="h6">Org</Typography>
                <Typography variant="h6">Email</Typography>
                </CardContent>
                </Card>
            </div>
            </div>
            </CardContent>
        </Card>
        </div> 
      </div>

      

      <div className={style.dflex}>
        <div className={style.threefourths }>
        <Typography variant="h4">Moderators Request</Typography>
        <Card className={style.cardr3}>
            <CardContent>
            <div className={style.d_flex}>
            <div className={style.col}>
                <Avatar sx={{ width: 100, height: 100 }}>U</Avatar>
                <Typography variant="h6">Appointed as Organization Moderator</Typography>
            </div>
            <div className={style.col}>
            <Card className={style.cardr2}>
                <CardContent>
                <Typography variant="h6">Name</Typography>
                <Typography variant="h6">Student No</Typography>
                <Typography variant="h6">Org</Typography>
                <Typography variant="h6">Email</Typography>
                </CardContent>
                </Card>
            </div>
            <Button variant="text" className={style.rejectbutton}><CloseIcon /></Button>
            <Button variant="text" className={style.checkbutton}><CheckIcon /></Button>
            </div>
            </CardContent>
        </Card>
        </div>

        <div className={style.threefourths }>
        <Card className={style.cardr3}>
            <CardContent>
            <div className={style.d_flex}>
            <div className={style.col}>
                <Avatar sx={{ width: 100, height: 100 }}>U</Avatar>
                <Typography variant="h6">Appointed as Organization Moderator</Typography>
            </div>
            <div className={style.col}>
            <Card className={style.cardr2}>
                <CardContent>
                <Typography variant="h6">Name</Typography>
                <Typography variant="h6">Student No</Typography>
                <Typography variant="h6">Org</Typography>
                <Typography variant="h6">Email</Typography>
                </CardContent>
                </Card>
            </div>
            <Button variant="text" className={style.rejectbutton}><CloseIcon /></Button>
            <Button variant="text" className={style.checkbutton}><CheckIcon /></Button>
            </div>
            </CardContent>
        </Card>
        </div> 
      </div>
    </div>


  )
} 

