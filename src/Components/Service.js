import React from "react";
import logo2 from '../assets/Logo(2).png';
import logo3 from '../assets/Logo(3).png';
import logo4 from '../assets/Logo(4).png';
import logo5 from '../assets/Logo(5).png';
import logo6 from '../assets/Logo(6).png';
 
export default function Service() {
    const services = [
       {id: 1, title: "Membership Organisation", descroption: "Our membership management software provides full automation of membership renewal and payment", image: "/src/assets/icons/memebership.png"},
      {id: 2, title: "National Association", descroption: "Our membership management software provides full automation of membership renewal and payment", image: "/src/assets/icons/group-club.png"},
      {id: 3, title: "Club And Group", descroption: "Our membership management software provides full automation of membership renewal and payment", image: "/src/assets/icons/oraganisation.png"},
    ]
	return(
            <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
               <div className="text-center my-8">
                  <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our client</h2>
                  <p className="text-neutralDGrey">We have been working with some Fortune 500+ client</p>
               </div>
                 {/* Company Logo */}
                 <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                   <img src={logo2}  alt=""/>
                   <img src={logo3}  alt=""/>
                   <img src={logo4}  size={100} alt=""/>
                   <img src={logo5}  size={100} alt=""/>
                   <img src={logo6}  size={100} alt=""/>
                 </div>

               {/* Service card */}
                <div className="mt-20 md:w-1/2 mx-auto text-center">
                   <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">Manage your entire community in single system</h2>
                  <p className="text-neutralDGrey">Who is Nextcent suitable for?</p>
                </div>

              {/* Card */}
               <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-1 md:w-11/12 mx-auto gap-12">
                  {
                     services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                       <div>
                          <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt=""/></div>
                          <h4 className="text-2xl font-bold text-neutralDGrey mb-3 px-2">{service.title}</h4>
                          <p className="text-sm text-neutralDGrey">{service.descroption}</p>
                       </div>
                       </div>
                     )
                  }
               </div>
             </div>
		)
}