"use client";
import { Card, CardContent, CardActions, IconButton, Button, InputAdornment, Chip, Typography, ButtonGroup } from "@mui/material";
import { Avatar, FormControl, TextField } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from "../components/navbar/navbar";
import PostCard from "../components/card/card";
import EditIcon from '@mui/icons-material/Edit';
import style from './user_dashboard.module.css';
import NotesIcon from '@mui/icons-material/Notes';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';



export default function UserDashboard() {
  return(
    <div>
    <Navbar />
     <div className={style.dflex}>
       <div className={style.threefourths }>
      <Typography variant="h4">Users</Typography>
       </div>
       <FormControl>
            <TextField variant="outlined" className={style.searchbar} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}/>
          </FormControl>
          
      </div>
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
            <Card className={style.cardr3}>
                <CardContent>
                <Typography variant="h6">Status</Typography>
                </CardContent>
                </Card>
            </div>
            <Button variant="text"><NotesIcon /></Button>
            <Button variant="text"><EditIcon /></Button>
            </CardContent>
        </Card>
    </div>


  )}