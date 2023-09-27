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
    const user_name = "Frank"
    const email ="frank@gmail.com"
    const number = 8209512484
    const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };
    return (
      <div class="container" >
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
        style={{ background: '#17191A' }}
        sx={{ width: '50%', color: 'white', marginTop: '-80px', marginLeft:'-93%',borderRadius: '7em' 
         }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: 'white' }} />
              <TextField id="search" style={{color:'wheat'}}/>
            </InputAdornment>
          ),
          style: { color: 'white' },
        }}
      />
        <div className='notification' style={{right:'6%',top:'2%'}}><img src={Notificationsvg} alt='notifications'/></div>
      </Container>
      </div>
     
  
      <div id="settings_sidebar" >
      
      <div className='buttons'>
      <Button  onClick={handleClick}   style={{ width:'130px' ,height:'55px',right:'-5%'  }}>  < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard'  ,marginLeft: '10px'   }}> <img src={Homeicon} alt="Home Icon" className='btnimg' style={{  marginLeft: '-240%',marginTop:'-35%' }} /> <div style={{marginLeft:'-80%',marginTop:'-62%'}} >Home</div></h3> </Button> 
        <Link to="/recents"> <Button  onClick={handleClick}   style={{ width:'130px' ,height:'55px' ,right:'-5%'   }}> < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard' ,marginLeft: '10px'   }} ><img src={Recentsvg} alt="Home Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-180%',marginTop:'-35%' }} /> <div style={{marginLeft:'-40%',marginTop:'-56%'}} >Recents</div></h3> </Button></Link> 
        <Link to="/templates">  <Button  onClick={handleClick}   style={{ width:'130px' ,height:'55px'   ,right:'-5%'  }}> < h3 style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize' ,fontFamily:'Pretendard'  }} ><img src={tempaltesvg} alt="Home Icon"  className='btnimg'  style={{ verticalAlign: 'middle', marginLeft: '-5%',marginTop:'-5%' }}/>Template & Folders</h3></Button>  </Link>
      <Link to="/trash"><Button    style={{ width:'130px' ,height:'55px' ,right:'-5%'  }}>   < h3  style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard' ,marginLeft: '10px' }}><img src={deletesvg} alt="Home Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-255%' }} /><div style={{marginLeft:'-100%',marginTop:'-50%'}} >Trash</div></h3></Button></Link>  
      <Link to="/settings"><Button   style={{ width:'130px' ,height:'55px',  right:'-5%'   }}>  <h3  style={{color: '#A8A8A8',fontStyle:'normal',textTransform:'capitalize',fontFamily:'Pretendard',marginLeft: '10px'  }}><img src={settingsvg} alt="Home Icon"  className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-180%',marginTop:'-35%' }}/>   <div style={{marginLeft:'-50%',marginTop:'-55%'}} >settings</div></h3> </Button> </Link>
      
      
      <Button style={{ width: '130px', height: '55px', right: '-5%', border: '1px solid black', position: 'relative' }}>
          <h3 style={{ color: '#A8A8A8', fontStyle: 'normal', textTransform: 'capitalize', fontFamily: 'Pretendard', marginLeft: '10px' }}>
            <img src={Helpsvg} alt="Help Icon" className='btnimg' style={{ verticalAlign: 'middle', marginLeft: '-300%' }} />
            <div style={{marginLeft:'-130%',marginTop:'-70%'}} >Help</div>
          </h3>
        </Button>
      </div>
      
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
      <h1  >Settings</h1>
      <div className='circle'>
      <div className='username'>
      {user_name}</div></div>
       
      <h style={{ fontSize:'24px'}}>{user_name}</h>
      <p ><img src={settting_email}   />{email}</p>
      <p><img src={fillsettingsnumber}   />{number}</p>
      <Button><img src={editprofile} alt='edit profile'/></Button>
       
      <h  >   <img src={license_info} />active license</h>
      <Button  ><img src={knowmore}/></Button>
      </div>
      <div id='setting_content1' >
   
        <p onClick={toggleVisibility} style={{color:'white'}}>License information
  </p>
        <div  className='info'>
        <p onClick={toggleVisibility } style={{color:'white'}}>About</p>
        {isHidden ? null : <div style={{color:'white'}}>365 days left</div>}
        </div>
        <div  className='info'>
        <p onClick={toggleVisibility} style={{color:'white'}}>THemes</p>
        {/* {isHidden ? null : <div style={{color:'white'}}>This element is now visible!</div>} */}
     </div>
        <div  className='info'>
        <p onClick={toggleVisibility} style={{color:'white'}}>About</p>
        {/* {isHidden ? null : <div style={{color:'white'}}>This element is now visible!</div>} */}
        </div>
        <div  className='info'>
        <p onClick={toggleVisibility} style={{color:'white'}}>tutorial</p>
        {/* {isHidden ? null : <div style={{color:'white'}}>This element is now visible!</div>} */}
        </div>
      </div>
     </div>
     
    );
  };
  
  export default Settings;
  