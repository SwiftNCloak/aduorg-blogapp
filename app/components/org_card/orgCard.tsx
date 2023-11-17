
"use client";

import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import style from './orgCard.module.css'


export default function OrgCard(props: {
    Title: String
    Image: any
    ImageHeight: any
    ImageWidth: any

}) { 
    return(
        <div className={style.div_design}>
            <Image 
                src={props.Image}
                height={props.ImageHeight}
                width={props.ImageWidth}
                alt= "Org Page"
            />

            <Typography variant='h4' className={style.title_design}>{props.Title}</Typography>
        </div> 
    )
        
}