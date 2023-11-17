'use client';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import style from './orgpage.module.css';
import Navbar from "../components/navbar/navbar";
import Image from 'next/image';
import logo from "../../public/avatar_placeholder.png";
import logo2 from "../../public/logo_aduOrg.png"
import OrgCard from '../components/org_card/orgCard';
import Link from 'next/link';



export default function Orgpage() {
  return (
    <div className={style.parent}>
      <div className={style.header_background}>
        <Navbar />
        <Grid container spacing={2} className={style.header_container}>
          <Grid item xs={6} className={style.text_container}>
            <Typography variant="h3" className={style.customHeading} style={{ marginLeft: '150px' }}>
              Find organizations that suit your interests.
            </Typography>
            <p className={style.customParagraph} style={{ marginLeft: '150px' }}>
              It is interesting to find people that have similar interests with you. Scroll down below to find what organization suits you best.
            </p>
          </Grid>
          <Grid item xs={6}>
            <Image src={logo2} alt="Image Description" className={style.image} />
          </Grid>
        </Grid>
      </div>
      
      <div className={style.org_page}>
        <div>
          <Typography variant='h4' className={style.title_bottom}>ORGANIZATIONS</Typography>
        </div>
        <Grid container rowSpacing={3} columnSpacing={3} className={style.grid_design}>
            <Grid item xs = {3}>
              <Link href="/organization_feed">
                <OrgCard 
                  Image = {logo} 
                  ImageHeight = {400} 
                  ImageWidth={400} 
                  Title = "Adamson University Guild of Animation Makers and Esports (AdU-GAME)" /> 
              </Link>
            </Grid>

            <Grid item xs = {3}>
              <Link href = "">
                <OrgCard 
                  Image = {logo} 
                  ImageHeight = {400} 
                  ImageWidth={400} 
                  Title = "Lorem Ipsum" />
                </Link>
            </Grid>

            <Grid item xs = {3}>
              <OrgCard 
                Image = "/psau_logo.png" 
                ImageHeight = {270} 
                ImageWidth={270} 
                Title = "Physics Society of Adamson University (PSAU)" />
            </Grid>

            <Grid item xs = {3}>
              <OrgCard 
                Image = "/silip_lente.png" 
                ImageHeight = {270} 
                ImageWidth={270} 
                Title = "Silip@Lente - AdU" />
            </Grid>

          </Grid>   

       
      </div>
    </div>
  );
}

