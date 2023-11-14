'use client';

import { Card, CardContent, CardActions, IconButton, Button, Typography, ButtonGroup } from "@mui/material";
import style from './card.module.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default function PostCard(){
    return(
        <Card className={style.cardr}>
      <CardContent>
        <div className={style.d_flex}>
            <div className={style.col}>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                <Button variant="text"><ArrowCircleUpIcon /></Button>
                <Typography textAlign='center'>78</Typography>
                <Button variant="text"><ArrowCircleDownIcon /></Button>
            </ButtonGroup>
            </div>
            <div className={style.col}>
            <Typography variant="overline">
                Posted by <b className={style.fw_bold}>admin</b>
            </Typography>
            <Typography variant="h6">
            Hi guys! Baka interested kayo sumali sa upcoming event namin! 
            </Typography>
            <Typography>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost?"
            </Typography>
            </div>
        </div>
      </CardContent>
      <CardActions className={style.ml}>
        <Button>Comments</Button>
        <Button>Share</Button>
        <Button>Collect</Button>
      </CardActions>
    </Card>
    )
}