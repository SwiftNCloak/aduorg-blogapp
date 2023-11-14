'use client';

import { Card, CardContent, CardActions, IconButton, Button, Typography, ButtonGroup } from "@mui/material";
import style from './card.module.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default function Footer(){
    return(
        <Foot className={style.footr}>
      <CardContent>
        <div className={style.d_flex}>
            <div className={style.col}>
            <Typography>
            <Typography>57
            </Typography>
            </Typography>
            </div>
        </div>
      </CardContent>
      <CardActions className={style.ml}>
        <Button>Comments</Button>
        <Button>Share</Button>
        <Button>Collect</Button>
      </CardActions>
    </Foot>
    )
}