import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import {BrowserRouter, Switch, Route,Routes} from 'react-router-dom';
import AnimatedModal from './Pages/Popup'
import Excel_pop from './Pages/Popup_excel'
import Settings from './Pages/settings'
import Trash from './Pages/Trash';
import Recents from './Pages/Recents'
import Loadingprocess from './Pages/Loadingprocess';
import FileUploadComponent from './Pages/Demofileupload'
import Templates from './Pages/Templates'
import CreateTemplatePopUp from './Pages/CreateTemplatePopUp'
import Folder_list from './Pages/folder_list';
import PopupComponent from './Pages/popup_14fiels'
function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
            <Route exact path='/' element={<Homepage/>} />
            <Route path='/recents' element={<Recents/>} />
            <Route path='/trash' element={<Trash/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/createtemplate' element={<CreateTemplatePopUp/>}/>
            <Route path='/templates' element={<Templates/>}/>
            <Route path='/folder_list' element={<Folder_list/>}/>
            <Route path='/PopupComponent' element={<PopupComponent/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
