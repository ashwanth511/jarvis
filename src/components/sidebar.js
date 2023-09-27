  
import React ,{useState}from 'react'
import Popup from 'reactjs-popup';
import {Link  } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {styles } from  '../Pages/themes/Homepage.css';
import axios from 'axios';
import { Container, InputAdornment, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import uploadicon from "../Pages/themes/material-symbols_uploaduploadicon.svg"
import Logosvg from '../Pages/themes/Frame 427319120globalsearch.svg'
import SearchIcon from "@mui/icons-material/Search";
import Logopng from '../Pages/themes/image 29HOme.png'
import logoutsvg from '../Pages/themes/ic_baseline-logoutlogoutsvg.svg'
import settingsvg from '../Pages/themes/material-symbols_help-outlinesettingicon.svg'
import deletesvg from '../Pages/themes/mdi_trash-outlinedeleteicon.svg'
import deletetemplateicon from '../Pages/themes/deletetemplateicon.svg'
import Helpsvg from  '../Pages/themes/material-symbols_help-outlineHelpmenuicon.svg'
import Homeicon from '../Pages/themes/material-symbols_home-outline-roundedHomeicon.svg'
import tempaltesvg from '../Pages/themes/ph_folder-lighttempalte and folders.svg'
import newtemplatesvg from '../Pages/themes/newtemplate.svg'
import newfoldersvg from '../Pages/themes/newfolder.svg'
import recents from '../Pages/themes/recents.svg'
import extractnewbtn from '../Pages/themes/extractnewpdf.svg'
import Notificationsvg from '../Pages/themes/Frame 427319072notification.svg'
import licenseinfosvg from '../Pages/themes/carbon_license.svg'
import AnimatedModal from '../Pages/Popup';
import foldericon from '../Pages/themes/Vectorfolder.svg'

const Sidebar=()=>{
  const [buttonColor, setButtonColor] = useState();
  const handleClick = () => {
    
    setButtonColor('blue');  
  };
  return(
   
    <div id="sidebar" >

    < div className='btnborder'  >
   
    <Link to="/" className="btns">
          <h3 style={{ color: '#A8A8A8', textTransform: 'capitalize' }}>
            <div>
              <img src={Homeicon} style={{ marginRight: '13px', marginBottom: '-4px' }} />
              Home
            </div>
          </h3>
        </Link>

        <Link to="/recents" className="btns">
          <h3 style={{ color: '#A8A8A8', textTransform: 'capitalize' }}>
            <div>
              <img src={recents} style={{ marginRight: '13px', marginBottom: '-4px' }} />
              Recents
            </div>
          </h3>
        </Link>

        <Link to="/templates" className="btns" style={{ height: '48px' }}>
          <h3 style={{ color: '#A8A8A8', textTransform: 'capitalize', marginRight: '12px' }}>
            <div>
              <img src={tempaltesvg} style={{ marginRight: '13px', marginBottom: '-8px' }} />
              Template & Folders
            </div>
          </h3>
        </Link>

        <Link to="/trash" className="btns">
          <h3 style={{ color: '#A8A8A8', textTransform: 'capitalize' }}>
            <div>
              <img src={deletesvg} style={{ marginRight: '13px', marginBottom: '-4px' }} />
              Trash
            </div>
          </h3>
        </Link>

        <Link to="/help" className="btns">
          <h3 style={{ color: '#A8A8A8', textTransform: 'capitalize' }}>
            <div>
              <img src={Helpsvg} style={{ marginRight: '13px', marginBottom: '-4px' }} />
              Help
            </div>
          </h3>
        </Link>

        <Link to="/settings" className="btns">
          <h3 style={{ color: '#A8A8A8', textTransform: 'capitalize' }}>
            <div>
              <img src={settingsvg} style={{ marginRight: '13px', marginBottom: '-4px' }} />
              Settings
            </div>
          </h3>
        </Link>
  </div> 
  
  <Card id='sidebar'  className='license' >
      <CardContent  >
      
        <Typography variant="h5" component="div" style={{fontSize:' 1rem'}}>
          <img src={licenseinfosvg} style={{marginTop:'-2%',marginLeft:'-11%'}}/>
          license info
        </Typography>
        <Typography  color="text.secondary">
        </Typography>
        <Typography variant="body2" style={{fontSize:'11px'}}>
         
          <br />
          {'12 / 100 Files used 14 days left'}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small" style={{fontSize: '0.875rem',color:'white'}} >Known More</Button>
      </CardActions>
    </Card>
    </div>
  )
  }
  export default Sidebar
 