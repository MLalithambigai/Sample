
import './App.css';
import { Navbar } from './Components/Navbars/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { DonerLogin } from './Pages/DonerLogin';
import { OrpanageLogin } from './Pages/OrpanageLogin.jsx';
import { AdminLoinPage } from './Pages/AdminLoingPage.jsx';
import { AdminShow } from './Pages/AdminShow.jsx';
import { AddOrphanage } from './Components/AboutAdmin/AddOrphanage/AddOrphanage.jsx';
import { AdminNavbar } from './Components/Navbars/AdminNavbar/AdminNavbar.jsx';
import { ManageOrphanage } from './Components/AboutAdmin/ManageOrphanage/ManageOrphanage.jsx';
import { ViewDonorDetails } from './Components/AboutAdmin/ViewDonorDetails/ViewDonorDetails.jsx';
import { ViewFeedback } from './Components/AboutAdmin/ViewFeedback/ViewFeedback.jsx';
import { OrphanageShow } from './Pages/OrphanageShow.jsx';
import { OrphanageNavbar } from './Components/Navbars/OrpanageNavbar/OrphanageNavbar.jsx';
import { GiveReDonor } from './Components/AboutOrphange/GiveReDonor/GiveReDonor.jsx';
import { ViewReStatus } from './Components/AboutOrphange/ViewReStatus/ViewReStatus.jsx';
import { GiveFeedback } from './Components/AboutOrphange/GiveFeedback/GiveFeedback.jsx';
import { DonorShoe } from './Pages/DonorShoe.jsx';
import { DonorNavbar } from './Components/Navbars/DonarNavbar/DonorNavbar.jsx';
import { DoViewDetails } from './Components/AboutDonor/ViewDetails/DoViewDetails.jsx';
import { DoViewHistory } from './Components/AboutDonor/ViewHistory/DoViewHistory.jsx';
import { DoViewFeedback } from './Components/AboutDonor/ViewFeedback/DoViewFeedback.jsx';
import { OrphanageSelect } from './Pages/OrphanageSelect.jsx';
import { UpdateOrphanage } from './Components/AboutAdmin/UpdateOrphange/UpdateOrphanage.jsx';
import { DonationForm } from './Components/AboutDonor/DonationForm/DonationForm.jsx';
import { AdobtRegister } from './Pages/AdobtRegister.jsx';
import { AdobtLogin } from './Pages/AdobtLogin.jsx';
import { Addchild } from './Components/AboutOrphange/AddnewChild/Addchild.jsx';
import { Addmorechild } from './Components/AboutOrphange/Addmorechild/Addmorechild.jsx';
import { ViewChild } from './Components/AboutOrphange/ViewChild/ViewChild.jsx';
import AdoptViewChild from './Components/AboutAdopt/AdoptViewChild/AdoptViewChild.jsx';
import MoreaboutOnechild from './Components/AboutAdopt/MoreaboutOnechild/MoreaboutOnechild.jsx';
import { AcceptAdoption } from './Components/AboutOrphange/AcceptAdoption/AcceptAdoption.jsx';










function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/> <HomePage/></>} ></Route>
        <Route path='/AdminLogin' element={<AdminLoinPage/>}></Route>
        <Route path='/Admin' element={<AdminShow/>} />
          <Route path='/Admin/AddOrphange' element={<><AdminNavbar/> <AddOrphanage/></>} />
          <Route path='/Admin/ManageOrphanage' element={<><AdminNavbar/> <ManageOrphanage/></>} />
          <Route path='/Admin/ViewDonorDetails' element={<><AdminNavbar/> <ViewDonorDetails/></>} />
          <Route path='/Admin/ViewFeedback' element={<><AdminNavbar/> <ViewFeedback/></>} />
          <Route path='/Admin/ManageOrphanage/UpdateOrphange' element={<><AdminNavbar/> <UpdateOrphanage/></>} />
        

        <Route path='/OrphanageSelect' element={<OrphanageSelect/>}></Route>
        <Route path='/OrphanageLogin' element={<OrpanageLogin/>}></Route>
        <Route path='/Orphanage-Name' element={<OrphanageShow/>} />
          <Route path='/Orphanage-Name/GiveReDonor' element={<><OrphanageNavbar/> <GiveReDonor/></>} />
          <Route path='/Orphanage-Name/ViewReStatus' element={<><OrphanageNavbar/> <ViewReStatus/></>} />
          <Route path='/Orphanage-Name/GiveFeedback' element={<><OrphanageNavbar/> <GiveFeedback/></>} />
          <Route path='/Orphanage-Name/Add Child' element={<><OrphanageNavbar/> <Addchild/></>} />
          <Route path='/Orphanage-Name/Add Child/moredetilas' element={<><OrphanageNavbar/> <Addmorechild/></>} />
          <Route path='/Orphanage-Name/View Child' element={<><OrphanageNavbar/> <ViewChild/></>} />
          <Route path='/Orphanage-Name/AcceptAdoption' element={<><OrphanageNavbar/> <AcceptAdoption /></>} />
        

        <Route path='/DonerLogin' element={<DonerLogin/>}></Route>
          <Route path='/Donor-Name' element={<DonorShoe/>} />
          <Route path='Donor-Name/ViewDetails' element={<><DonorNavbar/> <DoViewDetails/></>} />
          <Route path='/Donor-Name/ViewHistory' element={<><DonorNavbar/> <DoViewHistory/></>} />
          <Route path='/Donor-Name/ViewFeedback' element={<><DonorNavbar/> <DoViewFeedback/></>} />
          <Route path='/Donor-Name/ViewDetails/Donationform' element={<> <DonationForm/></>} />


        <Route path='/Adopt' element={<AdobtLogin/>}></Route>
        <Route path='/Adobt/Regester' element={<AdobtRegister/>}></Route>
        <Route path='/Adobt/ViewChild' element={<><Navbar/><AdoptViewChild/></>}></Route>
        <Route path="/Viewchild/:id" element={<><Navbar/><MoreaboutOnechild/></>} />
        

        

        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
