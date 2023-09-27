import React ,{useState}from 'react'
import Popup from 'reactjs-popup';
import { styled } from '@mui/material/styles';
import {Link  } from 'react-router-dom';
import style from './Trash.css'
import { Container, InputAdornment, TextField, withTheme } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Logopng from './themes/image 29HOme.png'
import settingsvg from './themes/material-symbols_help-outlinesettingicon.svg'
import deletesvg from './themes/mdi_trash-outlinedeleteicon.svg'
import Helpsvg from  './themes/material-symbols_help-outlineHelpmenuicon.svg'
import Homeicon from './themes/material-symbols_home-outline-roundedHomeicon.svg'
import tempaltesvg from './themes/ph_folder-lighttempalte and folders.svg'
import Recentsvg from './themes/material-symbols_home-outline-roundedRecent.svg'
import Notificationsvg from './themes/Frame 427319072notification.svg'


const Trash = () => {
  const [buttonColor, setButtonColor] = useState();
  const handleClick = () => {
    
    setButtonColor('blue');  
  };
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const selected = event.target.files;
    const newFiles = Array.from(selected).map((file) => ({
      name: file.name,
      file: file,
    }));
    setSelectedFiles(newFiles);
  };

  const columns = [
    {
        field: 'checkbox', 
        headerName: '',   
        width: 50,
        renderCell: (params) => (
           
            <Checkbox
            color="primary"
            style={{
              border: '1px solid white',   
              padding: '5px',
              borderEndEndRadius:'1px',
              borderStartEndRadius:'1px',
              borderStartStartRadius:'1px',
              borderEndStartRadius :'1px',
              width: '21px',  
              height: '21px',  
            }}
            
          />
        
        ),
      },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'Mode',
      headerName: 'Mode',
      width: 200,
    },
    {
      field: 'Size',
      headerName: 'Size',
      width: 200,
    },
    {
      field: 'Template',
      headerName: 'Template',
      width: 200,
    },
    {
      field: 'Date',
      headerName: 'Date',
      width: 200,
    },
    
  ];
  
  const rows = [
    { id: 1, checkbox: '', name: 'John Doe', Mode: 'single mode',Size:'30kb',Template:'template1'},
    { id: 21,  checkbox: '',name: 'Jane Smith', Mode: 'double mode' ,Size:'30kb',Template:'template1'},
    { id: 22,  checkbox: '',name: 'Jane Smith', Mode: 'single mode',Size:'30kb',Template:'template1' },
    { id: 42, checkbox: '', name: 'Jane Smith', Mode: 'double mode',Size:'30kb',Template:'template1' },
    { id: 25, checkbox: '', name: 'Jane Smith', Mode: 'double mode' ,Size:'30kb',Template:'template1'},
    { id: 26, checkbox: '', name: 'Jane Smith', Mode: 'single mode',Size:'30kb',Template:'template1' }
  ];
    return (
    <div className="trash_container">
  
    < div className='trash_nav'>
     <div className='first-child' ><img src={Logopng} alta='Logo'/></div>
    <div></div> 
    <Container maxWidth="md" sx={{ mt: 15 ,color:'white' }} style={{ color: 'white'  }} >
    <TextField 
    id="search"
    type="search"
    label="Search"
    value={searchTerm}
    onChange={handleChange}
    style={{ background: '#252323', color: 'white' }}
    sx={{ width: '600%', color: 'white', marginTop: '-80px', marginLeft:'50%',borderRadius: '7em' 
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
      <div className='notification'><img src={Notificationsvg} alt='notifications'/></div>
    </Container>
    </div>

    <div className='trash_main' style={{fontSize:'24px',fontStyle:'normal',backgroundColor:'black',display:'flex',flexDirection:'row'}}>
   <h style={{  fontStyle:'normal',fontSize:'24px'}}>Trash</h>
   <div  ><Button className='trash_recentsort' style={{backgroundColor:'gray',color:'white',borderRadius:'10%',fontSize:'40%',height:'45%'}}><p>all</p></Button></div>
     <div  ><Button className='trash_recentsort'  style={{backgroundColor:'gray',color:'white' ,borderRadius:'10%',fontSize:'40%',height:'45%'}}><h  >Single Mode</h></Button></div>
     <div  ><Button className='trash_recentsort' style={{backgroundColor:'gray',color:'white' ,borderRadius:'10%',fontSize:'40%',height:'45%'}} ><p >multiple</p></Button></div>
     <div  ><Button className='trash_recentsort'  style={{backgroundColor:'gray',color:'white' ,borderRadius:'10%',fontSize:'40%',height:'45%'}}><p >this month</p></Button></div>
     </div>
    <div id="trash_sidebar">
   
      <div className='trash_sidebarbutton'>
      <div className='buttons'>
      <Link to="/"><Button  onClick={handleClick}   style={{ width:'130px' ,height:'30px',right:'-5%'  }}>  < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard'  ,marginLeft: '10px'   }}> <img src={Homeicon} alt="Home Icon" className='btnimg' style={{  marginLeft: '-240%', marginTop:'-110%' }} /> <div style={{marginLeft:'-80%',marginTop:'-62%'}} >Home</div></h3> </Button> </Link>
    <Link to="/recents"> <Button  onClick={handleClick}   style={{ width:'130px' ,height:'30px' ,right:'-5%'   }}> < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard' ,marginLeft: '10px'   }} ><img src={Recentsvg} alt="Home Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-180%',marginTop:'-35%' }} /> <div style={{marginLeft:'-40%',marginTop:'-56%'}} >Recents</div></h3> </Button></Link> 
    <Link to="/templates">  <Button  onClick={handleClick}   style={{ width:'130px' ,height:'30px'   ,right:'-5%'  }}> < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize' ,fontFamily:'Pretendard'  }} ><img src={tempaltesvg} alt="Home Icon"  className='btnimg'  style={{ verticalAlign: 'middle', marginLeft: '-5%',marginTop:'-5%' }}/>Template & Folders</h3></Button>  </Link>
  <Link to="/trash"><Button    style={{ width:'130px' ,height:'30px' ,right:'-5%'  }}>   < h3  style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard' ,marginLeft: '10px' }}><img src={deletesvg} alt="Home Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-255%' }} /><div style={{marginLeft:'-100%',marginTop:'-50%'}} >Trash</div></h3></Button></Link>  
  <Link to="/settings"><Button   style={{ width:'130px' ,height:'30px',  right:'-5%'   }}>  <h3  style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard',marginLeft: '10px'  }}><img src={settingsvg} alt="Home Icon"  className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-180%',marginTop:'-35%' }}/>   <div style={{marginLeft:'-50%',marginTop:'-55%'}} >settings</div></h3> </Button> </Link>
  
  
  <Button style={{ width: '130px', height: '30px', right: '-5%', border: '1px solid black', position: 'relative' }}>
      <h3 style={{ color: '#A8A8A8', fontStyle: 'normal', textTransform: 'capitalize', fontFamily: 'Pretendard', marginLeft: '10px' }}>
        <img src={Helpsvg} alt="Help Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-300%' }} />
        <div style={{marginLeft:'-130%',marginTop:'-70%'}} >Help</div>
      </h3>
    </Button>
     </div>
   </div>
    </div>
    <div id="trash_content1">
    <div style={{  width: '100%',overflowY: 'hidden'}}>
      <DataGrid style={{ color: 'white'}}
        rows={rows}
        columns={columns}
        pageSize={5}
        
      />
    </div>
   </div>
  </div>
  )
}

export default Trash;


