 
import React from 'react';
import {styles } from  './themes/Homepage.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import xlssvg from './themes/xlsicon.svg';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
 

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
function Excel_pop() {
    const [selecttemplate, SetTemplate] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        selecttemplate(event.target.value );
    };
    const pdfFiles = [
        { name: 'PDF File 1', url: 'path/to/pdf1.pdf' },
        { name: 'PDF File 2', url: 'path/to/pdf2.pdf' },
        { name: 'PDF File 1', url: 'path/to/pdf1.pdf' },
        { name: 'PDF File 2', url: 'path/to/pdf2.pdf' },
        { name: 'PDF File 1', url: 'path/to/pdf1.pdf' },
        { name: 'PDF File 2', url: 'path/to/pdf2.pdf' },
      ];
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    
    const handleOpen_excel = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
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
                    <div className={classes.paper} style={{backgroundColor:"black",color:'white',width:'1095px',height:'610px',marginTop:'-140px'}}>
                        <p1 style={{position:'fixed' ,color:'white' }}>Extraction Results </p1>
                        <div className='uploadpdf' style={{width:'990px',height: '200px', overflowY: 'scroll', overflowX: 'hidden', scrollbarWidth: '1px',marginTop:'86px',marginBottom:'10px solid #101213',backgroundColor:'#17191A'}}>
                        {pdfFiles.map((pdf, index) => (
  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px',width:'500px',height:'60px'}}>
    <img src={xlssvg} alt="PDF Icon" style={{ width: '90px', height: '20px', marginRight: '10px' }} />
    <p style={{ width: '600px', height: '50px', marginTop: 0, marginBottom: 0 }}>{pdf.name}</p>
    <Button style={{backgroundColor:'#242627' ,padding:'3px',marginRight: '10px',width:'110px',height:'30px',fontSize: '11px',color:'white'}}>view Output </Button>
  </div>
))}

                        </div>
                        
                        <p style={{marginTop:'20px',fontSize:'24px'}}>template used</p>
                        <div style={{backgroundColor:'gray'}}>
                        
                        <Box sx={{ minWidth: 120,padding:'24px, 30px, 24px, 30px' }}   >
                        <FormControl fullWidth  style={{alignItems:'center'}}>
 

    <div style={{height:'36.5px',width:'36px',borderRadius:'50%',backgroundColor:'#3498db',display:'flex',flexDirection:'column',flexWrap:'wrap',position:'relative',justifyContent:'center',alignItems:'center',marginLeft:'-90%'}}>
                       <div className='username'> <p className='username'>template Name</p></div> 
                         </div>
                        </FormControl>
                         
                        </Box>
                        </div>
                        <Button style={{backgroundColor:'#242627', padding:'13px', width:'151px', height:'30px', fontSize: '14px',whiteSpace:'nowrap', margin: '5px',color:'white'}}> Extract other files </Button>
    <Button style={{backgroundColor:'skyblue', padding:'13px', width:'50px', height:'30px', fontSize: '14px', margin: '5px',whiteSpace:'nowrap'}}>Done </Button>
 
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default Excel_pop;
