"use client";



import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button, Typography } from '@mui/material';
import style from "./verification.module.css"
import { useRouter } from 'next/navigation';

export default function VerificationPage() {

    const router = useRouter();

    const buttonClick = () => {
        router.push("/login")
    }


    return(
        <div className={style.container}>
            <CheckCircleRoundedIcon className={style.logo_design}/>
            <Typography variant = "h4" className={style.text_design}>You are now Verified!</Typography>

            <Button variant='contained' className={style.button_design} onClick={buttonClick}>Continue</Button>

        </div>
    )
}