'use client';

import style from './user_profile.module.css';
import Navbar from "../components/navbar/navbar";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Avatar } from '@mui/material';

function page() {
  let formData: any, setFormData: any;
  [formData, setFormData] = useState({
    name: '',
    username: '',
    organization: '',
    bio: '',
  });

  let handleInputChange: any;
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let handleSubmit: any;
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className={style.parent}>
        <div>
          <div className={style.header_background}>
            <Navbar />
            <Button
              className={style.cover_button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Change cover photo
            </Button>
          </div>
        </div>
      </div>

      <div className={style.bottom_half}>
        <div className={style.header_design}>
          <div className={style.header_imagebox}>
            <Avatar
              alt="Remy Sharp"
              src="../../public/placeholder_orgfeed.png"
              sx={{ width: 300, height: 300 }}
              className={style.avatar_design}
            />
          </div>
        </div>

        <div className={style.buttonContainer}>
          <Button
            className={style.profilepic_button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Set an existing profile picture
          </Button>

          <Button
            className={style.camera_button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Take a photo
          </Button>
        </div>

        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <TextField
              className={style.inputField}
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              className={style.inputField}
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              className={style.inputField}
              label="Organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              className={style.inputField}
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Button
              className={style.editButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              Edit
            </Button>
            <Button
              className={style.submitButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;