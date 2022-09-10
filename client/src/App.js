import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import Programs from './components/pages/Programs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Upload from './components/pages/Upload';
import SignIn from './components/form/SignIn/SignIn';
import SignUp from './components/form/SignUp/SignUp';
import Test from './components/Test';
import ProjectShowIt from "./components/pages/ProjectShowIt";
import InterHighSchool from "./components/pages/InterHighSchool";
import AdolescenceSportMeet from "./components/pages/AdolescenceSportsMeet";
import MadmamH from "./components/pages/MadmamH";
import MadmamS from "./components/pages/MadmamS";
import MadmamSchool from "./components/pages/MadmamSchool";
import MusicProduction from "./components/pages/MusicProduction";
import VideoProduction from "./components/pages/VideoProduction";
import Writing from "./components/pages/Writing";
import About from "./components/pages/About";
import Archive from "./components/pages/Archive";
import Contact from "./components/pages/Contact";
import ArtistM from "./components/pages/ArtistM";
import MadmamA from "./components/pages/MadmamA";
import UploadV1 from "./components/pages/UploadV1";
import Display from "./components/pages/Display";
import Donate from "./components/pages/Donate";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import LoginM from "./components/pages/LoginM";
import Register from "./components/pages/Register";

//import Login from "./components/Login";
//import AdminAccountView from "./components/views/AdminAccountView";

//import Dashboard from "./components/views/Dashboard.js";
//import Navbar from "./components/Navbar.js";


function App() {

 
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        

         
          <Route path='/' exact component={Home}/>
        
        <Route exact path="/programs">
       
          <Programs />
        </Route>
        <Route exact path="/projectShowIt">
       
       <ProjectShowIt />
     </Route> 

     <Route exact path="/interHighSchool">
       
       <InterHighSchool />
     </Route> 

     <Route exact path='/adolescenceSportsMeet'>

      <AdolescenceSportMeet />
     </Route>

     <Route exact path='/about'>

      <About />
     </Route>

     <Route exact path='/archive'>

      <Archive />
     </Route>

     <Route exact path='/contact'>

      <Contact />
     </Route>

     <Route exact path='/madmamH'>

<MadmamH />
</Route>

<Route exact path='/madmamA'>

<MadmamA />
</Route>

<Route exact path='/madmamS'>

<MadmamS />
</Route>

<Route exact path='/madmamSchool'>

<MadmamSchool />
</Route>

<Route exact path='/artistM'>

<ArtistM />
</Route>

<Route exact path='/musicProduction'>

<MusicProduction />
</Route>

<Route exact path='/videoProduction'>

<VideoProduction />
</Route>

<Route exact path='/writing'>

<Writing />
</Route>

     <Route exact path="/dashboard">
       
       <Dashboard />
     </Route> 

     

     <Route exact path="/donate">
       
       <Donate />
     </Route> 

     <Route exact path="/login">
       
       <Login />
     </Route> 

     <Route exact path="/loginM">
       
       <LoginM />
     </Route>

     <Route exact path="/register">
       
       <Register />
     </Route>  

     <Route exact path="/display">
       
       <Display />
     </Route>       
        <Route exact path="/test">
       
          <Test />
        </Route>
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/upload" component={Upload} />


          
      

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
