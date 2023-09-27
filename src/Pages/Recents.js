import React ,{ useState, useEffect }from 'react'
import Popup from 'reactjs-popup';
import { styled } from '@mui/material/styles';
import {Link  } from 'react-router-dom';
import useStyles from './Recents.css'
import { Container, InputAdornment, withTheme } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import pdfpng from './themes/pdficon.png';
import SearchIcon from "@mui/icons-material/Search";
import Logopng from './themes/image 29HOme.png'
import settingsvg from './themes/material-symbols_help-outlinesettingicon.svg'
import deletesvg from './themes/mdi_trash-outlinedeleteicon.svg'
import Helpsvg from  './themes/material-symbols_help-outlineHelpmenuicon.svg'
import Homeicon from './themes/material-symbols_home-outline-roundedHomeicon.svg'
import tempaltesvg from './themes/ph_folder-lighttempalte and folders.svg'
import recents from './themes/recents.svg'
import Notificationsvg from './themes/Frame 427319072notification.svg'
import axios from "axios";
import {
  Card,
  Box,
  Autocomplete,
  TextField,
  CardContent,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material';

const Recents = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowdata, setRowdata] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRows(response.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (rowdata) {
      setRows([rowdata]);
    } else {
      axios.get(baseURL).then((response) => {
        setRows(response.data);
      });
    }
  }, [rowdata]);
  const [buttonColor, setButtonColor] = useState();
  const handleClick = () => {
    
    setButtonColor('blue');  
  };
  return (
    <div class="recent_container">
       <div id='recent_nav'>
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
      <div className='recent_notification' style={{right:'3%',top:'3%'}}><img src={Notificationsvg} alt='notifications'/></div>
    </Container>
      </div>
      <div id='recent_main' > 
      
      </div>

      <div id="recent_sidebar">
         < div className='recent_btnborder'  >
      <div style={{display:'flex' , flexDirection:'column',gap:'20px',alignItems:'flex-start',color: '#A8A8A8' ,textTransform:'capitalize',fontSize: '1rem'}}>
  <Button  onClick={handleClick}    className='recent_btns' >  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>   <div > <img src={Homeicon} style={{marginRight:'13px',marginBottom:'-4px'}}/>Home</div>  </h3> </Button>
  <Button  onClick={handleClick} className='recent_btns'>  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>   <div ><img src={recents} style={{marginRight:'13px',marginBottom:'-4px'}}/>Recents</div>  </h3> </Button>
  <Button  onClick={handleClick} className='recent_btns' style={{height:'48px'}}>  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize',marginRight:'12px'   }}>   <div ><img src={tempaltesvg} style={{marginRight:'13px',marginBottom:'-8px'}}/>template & folders</div>  </h3> </Button>
  <Button  onClick={handleClick} className='recent_btns'>  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>   <div ><img src={deletesvg} style={{marginRight:'13px',marginBottom:'-4px'}}/>trash</div>  </h3> </Button>
  <Button  onClick={handleClick} className='recent_btns'  >  < h3 style={{color: '#A8A8A8' ,textTransform:'capitalize'   }}>  <div ><img src={Helpsvg} style={{marginRight:'13px',marginBottom:'-4px'}}/>help</div>  </h3> </Button>
  <Button  onClick={handleClick} className='recent_btns'>  < h3 style={{  color: '#A8A8A8' ,textTransform:'capitalize'  }}> <div ><img src={settingsvg} style={{marginRight:'13px',marginBottom:'-4px'}}/>setttings</div>  </h3> </Button>
 
</div>
  </div>
      </div>

      width: '1,123px';
 
 height: '732px';
      <div id='recent_content1' style={{border:'11px solid red',width:'1,123px',height:'732px'}}>
      {rows ? (
        <Card >
          <Box
            componenet="span"
            m={1}
            display="flex"
            justifyContent="end"
            pr={1}
            pt={1}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              onChange={(e, v) => setRowdata(v)}
              getOptionLabel={(rows) => rows.title || ""}
              // sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </Box>

          <CardContent>
            <Paper sx={{  overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">ID</TableCell>
                      <TableCell align="left">Title</TableCell>
                      <TableCell align="left">Body</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                          >
                            <TableCell align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="left">{row.body}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
      </div>
    </div>
  );
}

 

export default Recents ;



 