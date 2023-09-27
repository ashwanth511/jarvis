import React, { useState } from 'react';
import {Link  } from 'react-router-dom';
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ReactPaginate from 'react-paginate';
import Logopng from './themes/image 29HOme.png';
import Homeicon from './themes/material-symbols_home-outline-roundedHomeicon.svg'
import tempaltesvg from './themes/ph_folder-lighttempalte and folders.svg'
import { Button } from '@mui/material';
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import DataTableExtensions from "react-data-table-component-extensions";
import Recentsvg from './themes/material-symbols_home-outline-roundedRecent.svg';
import Notificationsvg from './themes/Frame 427319072notification.svg';
import deletesvg from './themes/mdi_trash-outlinedeleteicon.svg';
import Helpsvg from  './themes/material-symbols_help-outlineHelpmenuicon.svg';
import settingsvg from './themes/material-symbols_help-outlinesettingicon.svg';
import foldericon from './themes/Vectorfolder.svg';
import detach from './themes/detach.svg';
import styles from './folder_list.css';
import { columns, data } from "./templatetabledata (1)";
import styled from 'styled-components';
import { blue } from '@mui/material/colors';
 
 
const customStyles = {
    
    rows: {
        style: {
           
            minHeight: '7px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
        },
    },
};


const Folder_list = () => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const tableData = {
        columns,
        style: {
            background: "brown",
          },
        data
      };

    return (
        <div Class='folderlist_container'>
            <div id='folderlist_nav' >
                <div className='first-child' style={{ position: 'relative' }}><img src={Logopng} alt='Logo' /></div>
                <Container maxWidth="md" sx={{ mt: 15, color: 'white' }} style={{ color: 'white' }} >
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
                    <div className='notification' style={{ right: '6%', top: '2%'   }}><img src={Notificationsvg} alt='notifications' /></div>
                </Container>
            </div>
            <div id='folderlist_sidebar' >
            <div className='buttons'>
  <Button    style={{ width:'130px' ,height:'30px',right:'-5%'  }}>  < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard'  ,marginLeft: '10px'   }}> <img src={Homeicon} alt="Home Icon" className='btnimg' style={{  marginLeft: '-240%',marginTop:'-35%' }} /> <div style={{marginLeft:'-80%',marginTop:'-62%'}} >Home</div></h3> </Button> 
    <Link to="/recents"> <Button    style={{ width:'130px' ,height:'30px' ,right:'-5%'   }}> < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard' ,marginLeft: '10px'   }} ><img src={Recentsvg} alt="Home Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-180%',marginTop:'-35%' }} /> <div style={{marginLeft:'-40%',marginTop:'-56%'}} >Recents</div></h3> </Button></Link> 
    <Link to="/templates">  <Button      style={{ width:'130px' ,height:'30px'   ,right:'-5%'  }}> < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize' ,fontFamily:'Pretendard'  }} ><img src={tempaltesvg} alt="Home Icon"  className='btnimg'  style={{ verticalAlign: 'middle', marginLeft: '-5%',marginTop:'-5%' }}/>Template & Folders</h3></Button>  </Link>
  <Link to="/trash"><Button    style={{ width:'130px' ,height:'30px' ,right:'-5%'  }}>   < h3  style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard' ,marginLeft: '10px' }}><img src={deletesvg} alt="Home Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-255%' }} /><div style={{marginLeft:'-100%',marginTop:'-50%'}} >Trash</div></h3></Button></Link>  
  <Link to="/settings"><Button   style={{ width:'130px' ,height:'30px',  right:'-5%'   }}>  <h3  style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard',marginLeft: '10px'  }}><img src={settingsvg} alt="Home Icon"  className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-180%',marginTop:'-35%' }}/>   <div style={{marginLeft:'-50%',marginTop:'-55%'}} >settings</div></h3> </Button> </Link>
  
  
  <Button style={{ width: '130px', height: '30px', right: '-5%',   position: 'relative' }}>
      <h3 style={{ color: '#A8A8A8', fontStyle: 'normal', textTransform: 'capitalize', fontFamily: 'Pretendard', marginLeft: '10px' }}>
        <img src={Helpsvg} alt="Help Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-300%' }} />
        <div style={{marginLeft:'-130%',marginTop:'-70%'}} >Help</div>
      </h3>
    </Button>
  </div>

            </div>
            <div id='folderlist_main'>
                <p style={{marginLeft:'-90%',fontSize: '16px' }}>folder  </p>
                <div style={{display:'flex',flexDirection:'row',marginLeft:'3%',gap:'1%'}}>
                <img src={foldericon} />
                <h style={{fontSize: '40px'}}>folder name</h>
                <Button><img src={detach}/></Button>
                </div>
            </div>
            <div id='folderlist_content1' style={{ overflow: 'hidden'}}>
         
        <DataTable  
          columns={columns}
          data={data}
          customStyles={customStyles}
          noHeader
          defaultSortField="id"
          sortIcon={<SortIcon />}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          background
          dense
          paginationPerPage={7}
           id="folderlist_content1"
        />
      {/* </DataTableExtensions> */}
            </div>
        </div>
    );
}

export default Folder_list;
