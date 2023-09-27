import React ,{useState}from 'react'
import Popup from 'reactjs-popup';
import {Link  } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {styles } from  './settings.css';
import axios from 'axios';
import { Container, InputAdornment, TextField } from "@mui/material";

 
import { Button } from '@mui/material';
import uploadicon from "./themes/material-symbols_uploaduploadicon.svg"
import Logosvg from './themes/Frame 427319120globalsearch.svg'
import SearchIcon from "@mui/icons-material/Search";
import Logopng from './themes/image 29HOme.png'
import logoutsvg from './themes/ic_baseline-logoutlogoutsvg.svg'
import settingsvg from './themes/material-symbols_help-outlinesettingicon.svg'
import deletesvg from './themes/mdi_trash-outlinedeleteicon.svg'
import Helpsvg from  './themes/material-symbols_help-outlineHelpmenuicon.svg'
import Homeicon from './themes/material-symbols_home-outline-roundedHomeicon.svg'
import tempaltesvg from './themes/ph_folder-lighttempalte and folders.svg'
import Recentsvg from './themes/material-symbols_home-outline-roundedRecent.svg'
import Notificationsvg from './themes/Frame 427319072notification.svg'
import licenseinfosvg from './themes/carbon_licenselicencseinfo.svg'
import license_info from './themes/settings_Licenseunfo.svg'
import about from './themes/settings_about.svg'
import settting_email from './themes/setting_email.svg'
import editprofile from './themes/edit_profile.svg'
import fillsettingsnumber from './themes/fillsettings_number.svg'
import settingstutorial from './themes/settings_tutorils.svg'
import knowmore from './themes/settings_knowmore.svg'
import Sidebar from '../components/sidebar';

 
 
const Settings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [buttonColor, setButtonColor] = useState();  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    setButtonColor('blue');  
  };
  const [isHidden, setIsHidden] = useState(true);
  const [isHidden1, setIsHidden1] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);
  const [isHidden3, setIsHidden3] = useState(true);
  const user_name = "Frank"
  const email ="frank@gmail.com"
  const number = 8209512484
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  const toggleVisibility1 = () => {
    setIsHidden1(!isHidden1);
  };
  const toggleVisibility2 = () => {
    setIsHidden2(!isHidden2);
  };
  const toggleVisibility3 = () => {
    setIsHidden3(!isHidden3);
  };
  
  return (
    <div class="settings_container" >
    <div id='settings_nav'>
     <div className='first-child' style={{position:'relative'}}><img src={Logopng} alta='Logo'/></div>
    <div></div> 
    <Container maxWidth="md" sx={{ mt: 15 ,color:'white' }} style={{ color: 'white'  }} >
   
    <TextField 
    id="search"
    type="search"
    label="Search"
    value={searchTerm}
    onChange={handleChange}
    style={{ background: '#252323', color: 'white' }}
      sx={{ width: '50%', color: 'white', marginTop: '-80px', marginLeft:'-93%',borderRadius: '7em' 
       }}
       InputLabelProps={{ style: { color: 'white' } }}  
       InputProps={{
         endAdornment: (
           <InputAdornment position="end" style={{ color: 'white' }}>
             <SearchIcon style={{ color: 'white' }} />
           </InputAdornment>
         ),
         style: { color: 'white' },
       }}
    />
      <div className='notification' style={{right:'6%',top:'2%'}}><img src={Notificationsvg} alt='notifications'/></div>
    </Container>
    </div>
   

    <div id="settings_sidebar" >
    
  <Sidebar/>
    
    {/* <Card id='sidebar'  className='license' style={{backgroundColor:"#242424",color:'white',width: '170px',height: '168px'}}>
        <CardContent  >
          <Typography variant="h5" component="div" style={{fontSize:'16px'}}>
            license info
          </Typography>
          <Typography  color="text.secondary">
          </Typography>
          <Typography variant="body2" style={{fontSize:'11px'}}>
           progress bar
            <br />
            {'12 / 100 Files used 14 days left'}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent:'center'}}>
          <Button size="small" >Known More</Button>
        </CardActions>
      </Card> */}
      </div>
 
    <div id="settings_main" >
      <div style={{width:'11%'}}>
    <h1  >Settings</h1>
    <div className='circle' style={{  borderRadius:'50%',backgroundColor:"3498db"}}>
      
    <div className='username'>
    {user_name}</div></div></div>
      <div style={{width:'20%',marginTop:'5%'}}>
    <h style={{ fontSize:'24px'}}>{user_name}</h>
    <p ><img src={settting_email}   />{email}</p>
    <p><img src={fillsettingsnumber}   />{number}</p>
    <Button style={{padding:'5px 20px'}}><img src={editprofile} alt='edit profile'/></Button>
    </div>
    <div style={{marginTop:'1%',padding:'5px 24%'}}>
    <h  >   <img src={license_info} />active license</h>
    <div><Button  ><img src={knowmore}/></Button></div>
    </div>
    </div>
    <div id='settings_content1'   >
 
      <p onClick={toggleVisibility} style={{color:'white' ,width:'80%',height:'20%',backgroundColor:'#17191A'}}><img src={licenseinfosvg}/>License information
</p>
{isHidden ? null : <div style={{color:'white'}}>This element is now visible!</div>}
      <p onClick={toggleVisibility1 } style={{color:'white' ,width:'80%',height:'10%',backgroundColor:'#17191A'}}><img src={about}/>About</p>
      {isHidden1 ? null : <div style={{color:'white' ,width:'80%',height:'10%'}}>365 days left</div>}
      
      <p onClick={toggleVisibility2} style={{color:'white' ,width:'80%',height:'10%',backgroundColor:'#17191A'}}>THemes</p>
      {isHidden2 ? null : <div style={{color:'white'}}>This element is now visible!</div>}
   
      <p onClick={toggleVisibility3} style={{color:'white' ,width:'80%',height:'10%',backgroundColor:'#17191A'}}>tutorial             &gt;</p>
      {isHidden3 ? null : <div style={{color:'white'}}>This element is now visible!</div>}
     
 
 
    </div>
   </div>
   
  );
};

export default Settings;
