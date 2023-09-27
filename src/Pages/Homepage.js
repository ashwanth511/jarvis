import React ,{useState}from 'react'
import Popup from 'reactjs-popup';
import {Link  } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {styles } from  './themes/Homepage.css';
import axios from 'axios';
import Sidebar from '../components/sidebar';
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
import uploadicon from "./themes/material-symbols_uploaduploadicon.svg"
import Logosvg from './themes/Frame 427319120globalsearch.svg'
import SearchIcon from "@mui/icons-material/Search";
import Logopng from './themes/image 29HOme.png'
import logoutsvg from './themes/ic_baseline-logoutlogoutsvg.svg'
import settingsvg from './themes/material-symbols_help-outlinesettingicon.svg'
import deletesvg from './themes/mdi_trash-outlinedeleteicon.svg'
import deletetemplateicon from './themes/deletetemplateicon.svg'
import Helpsvg from  './themes/material-symbols_help-outlineHelpmenuicon.svg'
import Homeicon from './themes/material-symbols_home-outline-roundedHomeicon.svg'
import tempaltesvg from './themes/ph_folder-lighttempalte and folders.svg'
import newtemplatesvg from './themes/newtemplate.svg'
import newfoldersvg from './themes/newfolder.svg'
import recents from './themes/recents.svg'
import extractnewbtn from './themes/extractnewpdf.svg'
import Notificationsvg from './themes/Frame 427319072notification.svg'
import licenseinfosvg from './themes/carbon_license.svg'
import AnimatedModal from './Popup';
import foldericon from './themes/Vectorfolder.svg'

 
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Homepage = (history ) => {
  const NavigateToRecents = () => {
    history.push('/recents');
  };
  const [foldername, setfoldername] = useState('foldername');
  const [buttonColor, setButtonColor] = useState();
  const handleClick = () => {
    
    setButtonColor('blue');  
  };
 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);


{/*here is the code and its just searchin among 1,2,3,4,5 as they have been passed as file names */}
        const filteredResults = [1, 2, 3, 4, 5].filter((item) => {
      
          return item.toString().includes(searchTerm);
        },
      {/*  const filteredResults = uploadedFiles.filter((file) => {
          // Perform the search logic here based on the file name 
          // For example, if the file has a name property, you can search based on the name
          return file.name.includes(searchTerm);
        */} 
        
        );
      
        setSearchResults(filteredResults);








      };


  let [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const selected = event.target.files;
    const newFiles = Array.from(selected).map((file) => ({
      name: file.name,
      file: file,
 
    }));
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newFiles]); // Merge new files with existing files
    const formData = new FormData();
  };

  const handleAddMoreFiles = () => {
    document.getElementById('fileInput').click(); // Trigger the file input element
  };
  const handleDeletePDF = (pdfToDelete) => {
    // Remove the selected PDF from the uploadedFile state
    const updatedFiles = selectedFiles.filter((pdf) => pdf !== pdfToDelete);
    setSelectedFiles(updatedFiles);
};
const [anchorEl, setAnchorEl] = useState(null);

const handleClicks = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

    return (
    <div class="container">

      {/*code for the navbar with search functionality  */}
    <nav>
     
    <img src={Logopng} alta='Logo' style={{width: '11%',
height: '4.375rem',marginTop:'1.5%',marginLeft:'1.8%'}} /> 
    
    <Container maxWidth="md" sx={{ mt: 15 ,color:'white' }} style={{ color: 'white'  }} >
   
       <TextField 
    id="search"
    type="search"
    label="Search"
    value={searchTerm}
    onChange={handleChange}
    style={{ background: '#17191A;', color: 'white' }}
      sx={{ width: ' 26.875rem', color: 'white', marginTop: '-80px', marginLeft:'-83%',borderRadius: '7em'
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
      <div className='notification' style={{right:'3%',top:'3%'}}><img src={Notificationsvg} alt='notifications'/></div>
    </Container>



    </nav>
    <main style={{
      background: 'linear-gradient(142deg, rgba(246, 209, 93, 0.50) -37.55%, rgba(96, 93, 246, 0.17) 63.67%, rgba(206, 93, 246, 0.16) 110.15%)',
      boxShadow: '0px 4px 50px 0px rgba(0, 0, 0, 0.02)' 
    }}>
    <div className='padding'>
    <div  onClick={() => document.getElementById('fileInput').click()} >
      <img
        src={uploadicon}
        alt='upload_icon'
        style={{ cursor: 'pointer' }}
      />
       </div > 
      
       <h style={{ fontSize:'120%',fontStyle:'normal',display: 'block',fontStyle:'normal',fontWeight: 'bold' }}>Extract from PDF/S</h>
       <h style={{ cursor: 'pointer', fontSize: '89%', display: 'inline' }}>
       <br/>
  <span style={{ color: '#A399F8',textDecorationLine: 'underline',marginTop:'10%' }}>click here</span> or Drag and drop files
</h>
    <p style={{fontSize: '75%',color:'#D2D2D2'}}>Maximum File size : 200MB</p> 
    </div>
      <input
        type="file"
        id="fileInput"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        {selectedFiles.map((file, index) => (
          <div key={index}>
            <AnimatedModal uploadedFile={selectedFiles} onDeletePDF={handleDeletePDF} addmorefiles={handleAddMoreFiles}/>
          </div>
        ))}
    </div >
    </main>
  
   
 <Sidebar/>
    <div id="content1"style={{gap: '0.9%'}}>
    
    {searchResults.map((index) => ( <Card
        sx={{ maxWidth: 345, maxHeight: 145 }}
        style={{ marginTop: '1%', marginRight: '0.8%', height: '100%', backgroundColor: 'white' }}
        key={index} // Make sure to provide a unique key for each item in the array
      >
        <CardMedia component="img" height="60%" image={Logopng} alt="icons" />
        <div style={{ background: '#242627', color: 'white', marginTop: '-20%' }}>
          <CardContent style={{ height: '1px', background: 'white' }}>
            <Typography variant="body2" color="text.secondary" style={{ height: '10px' }}>
              <h1 style={{ color: 'white', fontSize: '150%', marginLeft: '-80%' }}>Home</h1>
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ height: '10px' }}>
              <h1 style={{ marginTop: '15%', color: 'white', fontSize: '100%', marginLeft: '-70%', fontStyle: 'normal' }}>
                4 Template
              </h1>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <CardHeader
              action={
                <>
                  <IconButton aria-label="settings" onClick={handleClicks}>
                    <MoreVertIcon style={{ color: 'white', marginTop: '-80%' }} />
                  </IconButton>
                 
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    style={{marginLeft:'13px'}}
                  >
                     <div style={{backgroundColor:'#242627',color:'white'}}>
                    <MenuItem onClick={handleClose} style={{color:'#EC7777'}} ><img src={deletetemplateicon}/>Delete</MenuItem>
                    <MenuItem onClick={handleClose}><img src={extractnewbtn} style={{marginLeft:'-20px'}}/> extract new pdf</MenuItem>
                    </div>
                  </Menu>
                </>
              }
              style={{ height: '10%', marginLeft: '70%' }}
            />
          </CardActions>
        </div>
      </Card>))}
 
    <div style={{ display: 'block' }}>
  <Link to="/templates"><Button  className='content1btn' style={{textTransform:'capitalize'}}>View All Templates</Button></Link>
   <h1 className='suggestedtemplate'  >Suggested&nbsp;template</h1>
   <Button className='newtemp'><img src={newtemplatesvg }   /></Button> 
</div>
    </div>
  
    <footer   style={{fontFamily:'arial'}} >
   
  {[1, 2, 3, 4].map((index) => (<Card sx={{ maxWidth: 345}} className='folderboxview' >
    <div style={{ display:'flex',flexDirection:'row' }}> 
   
     <CardMedia
        component="img"
        
         
        alt="icons"
        className='foldericon'
          image={foldericon}
      />
      <div >
    <h1 className='foldername' style={{marginLeft:'10%'}}>{foldername}</h1> 
    <CardContent  >
      <Typography variant="body2" color="text.secondary"  >
        <div style={{ marginLeft:'-20%'}}>
         <p1 style={{color:'white',fontSize:'120%' }}> 4 Templates</p1>
         <Button   style={{whiteSpace:'nowrap',fontSize:'85%'}}>know more</Button>
         </div>
      </Typography>
    </CardContent>
    </div>  
    <div  > 
 
    <CardActions disableSpacing>
    <CardHeader
      action={
        <IconButton aria-label="settings">
       
          <MoreVertIcon style={{color:'#D4D4D4' }} />
        </IconButton>
      }
       style={{width: '11.5rem',height: '1.625rem '}}
    />

    </CardActions>
    </div>
    </div>
  </Card>))}
  <div style={{ display: 'block' }}>

  <Button className='foderview' style={{textTransform:'capitalize'}}>View more folders</Button>
  <h1 className='suggestedfolder'>suggested folder</h1>
   <Button className='newfolder' > <img src={newfoldersvg}  style={{ display:'block'}}  /></Button>
</div>
    </footer> 
  </div>
  )
}

export default Homepage;