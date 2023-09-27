import React ,{useState}from 'react'
import Popup from 'reactjs-popup';
import {Link  } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {styles } from  './Templates.css';
import axios from 'axios';
import { Container, InputAdornment, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { motion, useScroll } from "framer-motion"
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { Chart } from "react-google-charts";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
import newtemplatesvg from './themes/addnewtemplate.svg'
import newfoldersvg from './themes/newfolder.svg'
import recents from './themes/recents.svg'
import Notificationsvg from './themes/Frame 427319072notification.svg'
import licenseinfosvg from './themes/carbon_licenselicencseinfo.svg'
import AnimatedModal from './Popup';


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

const Templates = (history ) => {
  const NavigateToRecents = () => {
    history.push('/recents');
  };
  const { scrollYProgress } = useScroll();
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
    const formData = new FormData();

  };
  const data = [
    ["Pac Man", "Percentage"],
    ["", 75],
    ["", 25],
  ];
  
  const options = {
    legend: "none",
    pieSliceText: "percentage", 
    pieStartAngle: 125,
    tooltip: { trigger: "none" },
    slices: {
      0: {
        color: "#4dc079",
      },
      1: {
        color: "white",
      },
    },
    backgroundColor: {
      fill: "transparent",
    },
    chartArea: {
      backgroundColor: {
        fill: "transparent",
      },
    },
  };

  
    return (
      <div class="template_container">
      <div id='template_nav'>
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
      <div className='template_notification' style={{right:'3%',top:'3%'}}><img src={Notificationsvg} alt='notifications'/></div>
    </Container>
      </div>
      <div id='template_main' >  
      
   <div  style={{width:'500px',height:'185px' , sborderRadius:'13px',border:'1px solid blue',marginTop:'18px',ackground:'#17191A'}}>
   <h1 style={{ fontSize: '24px', textTransform: 'capitalize', left: '1%', top: '1%', position: 'absolute' }}>Your Usage</h1>
   <div>


   <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"500px"}
      height={"186px"}
      style={{ marginLeft: "-18%"  }}
    />
 </div>
 
   </div>
   <div style={{width:'500px',height:'186px',top:'185px',left:'24px',borderRadius:'12px',border:'1px solid blue',marginTop:'18px',background:'#17191A'}}>
   <p>Most used Templates</p>
   <div  > {[1, 2, 3, 4].map((index) => (<Card sx={{ maxWidth: 205,maxHeight:20 }} style={{   marginLeft:'38%',width:'181px',height:'171px',padding:'0px'}}>
        <Typography variant="body2" color="text.secondary" style={{height:'110px'}}>
           <h1>Home</h1>
        </Typography>
    </Card>))}</div>
    </div></div>
      <div id="template_sidebar">
         < div className='template_btnborder'  >
      <div style={{display:'flex' , flexDirection:'column',gap:'20px',alignItems:'flex-start',color: '#A8A8A8' ,textTransform:'capitalize',fontSize: '1rem'}}>
  <Button  onClick={handleClick}    className='template_btns' >  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>   <div > <img src={Homeicon} style={{marginRight:'13px',marginBottom:'-4px'}}/>Home</div>  </h3> </Button>
  <Button  onClick={handleClick} className='template_btns'>  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>   <div ><img src={recents} style={{marginRight:'13px',marginBottom:'-4px'}}/>Recents</div>  </h3> </Button>
  <Button  onClick={handleClick} className='template_btns' style={{height:'48px'}}>  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize',marginRight:'12px'   }}>   <div ><img src={tempaltesvg} style={{marginRight:'13px',marginBottom:'-8px'}}/>template & folders</div>  </h3> </Button>
  <Button  onClick={handleClick} className='template_btns'>  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>   <div ><img src={deletesvg} style={{marginRight:'13px',marginBottom:'-4px'}}/>trash</div>  </h3> </Button>
  <Button  onClick={handleClick} className='template_btns'  >  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>  <div ><img src={Helpsvg} style={{marginRight:'13px',marginBottom:'-4px'}}/>help</div>  </h3> </Button>
  <Button  onClick={handleClick} className='template_btns'>  < h3 style={{  color: '#A8A8A8' ,textTransform:'capitalize'  }}> <div ><img src={settingsvg} style={{marginRight:'13px',marginBottom:'-4px'}}/>setttings</div>  </h3> </Button>
 
</div>
  </div>
      </div>
      <div id="template_content1">
      {[1, 2, 3, 4,5].map((index) => (
  <Card
    sx={{
      maxWidth: 345,
      maxHeight: 145,
      display: 'inline-block',  
      marginRight: '0.8%',
      marginBottom: '1%',  
      backgroundColor: 'white',
    }}
    style={{width:'218px'}}
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
            <IconButton aria-label="settings">
              <MoreVertIcon style={{ color: 'white', marginTop: '-80%' }} />
            </IconButton>
          }
          style={{ height: '10%', marginLeft: '70%' }}
        />
      </CardActions>
    </div>
  </Card>
))}
  <div style={{ display: 'block' }}>
   {/* <h1 className='template_suggestedtemplate'  >Suggested&nbsp;template</h1> */}
</div>
      </div>
     
      <div id='template_footer'  >
      <div style={{ display: 'block' }}>
   {/* <h1 className='template_foldername'  >Suggested&nbsp;template</h1> */}
</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' ,gap:'40px',marginLeft:'0%' }}>
      {[1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3].map((index) => (
  <Card
    sx={{
      maxWidth: 345,
      maxHeight: 145,
      display: 'inline-block',  
      marginRight: '0.8%',
      marginBottom: '1%',  
      backgroundColor: 'white',
    }}
    style={{width:'218px'}}
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
            <IconButton aria-label="settings">
              <MoreVertIcon style={{ color: 'white', marginTop: '-80%' }} />
            </IconButton>
          }
          style={{ height: '10%', marginLeft: '70%' }}
        />
      </CardActions>
    </div>
  </Card>
))}

</div>

      </div>
    </div>
  )
}

export default Templates;