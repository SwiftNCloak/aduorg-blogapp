'use client';

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import logo from '../../../public/logo_aduOrg.png'
import Link from "next/link";

import style from './navbar.module.css'
import { useRouter } from 'next/navigation'




export default function Navbar() {

    const router = useRouter()

    const loginClick = () => {
        router.push('/login')
    }

    const registerClick = () => {
        router.push('/signup')
    }

    return(
        <Box className = {style.box_design}> 
            <AppBar position="static" className={style.appbar_design}>

                <Toolbar className = {style.toolbar_design}>
                    

                    <div className={style.link_group}>

                    <Image
                        src={logo}
                        width={200}
                        height={200}
                        alt="Logo of Adu Org"
                    />

                        <Link href = '' >
                            
                           <Typography sx = {{fontWeight: 'bold', textTransform: 'uppercase'}}>About</Typography>
                            
                        </Link>

                        <Link href = '' >
                            
                        <Typography sx = {{fontWeight: 'bold', textTransform: 'uppercase'}}>Organizations</Typography>
                            
                        </Link>
                    </div>

                    <div className={style.button_group}>
                        <Button variant="contained" className = {style.button_design} onClick={loginClick}>Login</Button>
                        <Button variant="contained" className = {style.button_design} onClick={registerClick}>Register</Button>
                    </div>


                </Toolbar>

            </AppBar>
        
        </Box>
    )
}