 
import React,{useState} from 'react';
import {styles } from  './popuppdf.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import pdfpng from './themes/pdficon.png';
import Selectfile from './themes/selectmorefiles.svg';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import Startextraction from './themes/startextraction.svg'
import Excel_pop from './Popup_excel';
import Loadingprocess from './Loadingprocess'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function AnimatedModal({ uploadedFile,loadinghandle,onDeletePDF,addmorefiles  }) {
    const handleDeletePDF = (pdfToDelete) => {
        // Use the onDeletePDF function to remove the selected PDF from the state.
        onDeletePDF(pdfToDelete);
    };
    const addmorefile =(prevSelectedFiles) =>{
        addmorefiles(prevSelectedFiles);
    }
    console.log(uploadedFile)
    const [selecttemplate, SetTemplate] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        selecttemplate(event.target.value );
    };
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [isLoading, setIsLoading] = useState(false);
    const [handleOpen_excel,set_excel_open] = useState(false)
    
    const handleClick = () => {
        console.log("thefiles")
       
        setTimeout(() => {
            setIsLoading(true);
          set_excel_open(true);
        }, 3000);  
      };
    return (
        <div > 
            {/* <Button variant="contained" color="secondary" onClick={handleOpen}>
                Open Animated Modal
            </Button>
             */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div  className='insideupload'>
                        <p1 style={{position:'fixed' ,color:'white',fontSize: '24px',marginTop:'34px' }}>Selected File ({uploadedFile .length})</p1>
                        <div className='uploadpdf'>
                            <div  style={{  overflowX: 'hidden',overflowY: 'scroll',maxHeight: '700px',marginTop:'113px'}}>
                        {uploadedFile.map((pdf,index) =>(
                       <div style={{  padding:'24px 30px',display:'flex',flexDirection:'column',width:'900px',height:'50px',marginTop:'10px',gap: '10px',boxShadow:' 0px 4px 50px 0px rgba(0, 0, 0, 0.02)',background:'#17191A'}}> <p ><img src={pdfpng}/> {pdf.name}   </p><CloseIcon onClick={() => handleDeletePDF(pdf)}   style={{marginTop:'-7%',marginLeft:'100%'}} />
                        {/* <button onClick={() => handleDeletePDF(pdf)}>Delete</button> */}
                      
                       </div>
                        ))}
                         </div>
                        <Button style={{position:'absolute',right:'50%',marginTop:'32px'}} onClick={addmorefile}><img src={Selectfile} alt='selctfiles'/></Button>
                            
                        </div>
                        <p style={{fontSize:'24px',marginTop:'87px'}}>Select a template</p>
                        <div style={{backgroundColor:'#17191A',color:'white',placeholder:'select template'}}>
                        
                        <Box sx={{ minWidth: 120 }}  >
<FormControl fullWidth>
  <InputLabel style={{ fontSize: '16px', color: 'white' }}>
    Select a template
  </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selecttemplate}
    label="Select template"
    onChange={handleChange}
    style={{ width: '990px', height: '72px', overflowY: 'scroll' }}
  >
    <MenuItem value={10}>Template1</MenuItem>
    <MenuItem value={20}>Template2</MenuItem>
    <MenuItem value={30}>Template3</MenuItem>
  </Select>
</FormControl>

                         
                        </Box>
                        </div>
                        <Button  style={{  
   alignItems:'center',position:'absolute',right:'50%'
    }} onClick={() => {
        handleClose(); handleClick();
      }} > 
    <img src={Startextraction} 
    // onClick={() => {
    //     handleClose(); handleClick();
    //   }} 
      alt='extractions'/> </Button>
                    </div>
                    
                </Fade>
            </Modal>
             
            {isLoading && <Loadingprocess />}  
            {handleOpen_excel && <Excel_pop />}
        </div>
    );
}
export default AnimatedModal;
