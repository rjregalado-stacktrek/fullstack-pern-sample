import React from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from './Sidebar'
import Footer from "./Footer";

const MainPage = () => {
  return (
    <React.Fragment>
      {/* Header Section */}
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      {/* Sidebar Section */}
      <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 bg-white h-screen pl-2 md:col-span-2'>
              <Sidebar/>
          </div>


          <div className='col-span-9 bg-white-500 h-screen pl-2 md:col-span-10'>
              <NavPage/>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default MainPage;

