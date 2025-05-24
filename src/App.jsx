import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { User } from 'lucide-react';
import { Phone } from 'lucide-react';
import { School } from 'lucide-react';
import { Earth } from 'lucide-react';
import { BookCheck } from 'lucide-react';
import { Landmark } from 'lucide-react';
import { Receipt } from 'lucide-react';
import { Files } from 'lucide-react';
import { Captions } from 'lucide-react';
import { Mails } from 'lucide-react';
import { FileUser } from 'lucide-react';
import { PlaneTakeoff } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Navigation } from 'lucide-react';


function App() {
  

  return (
    <>
      {/* header section*/}
   <header className='w-full custom-flex bg-primary '>
   <div className='  custom-container flex justify-between  px-2 max-md:responsive-mid'> 
      <div>
        <p className='py-3'>We're Leading Educational Consultancy in Bangladesh</p>
      </div>
      <div className='flex gap-6'>
        <div><p className='py-3'>Office Hours: 10.00Am-07:00PM</p></div>
  
        <div className='border-l-[0.5px] custom-border pl-5'> < Facebook  className='w-4'/></div>
        <div className='border-x-[0.5px] custom-border px-5'><Instagram  className='w-4'/></div>
        <div className=' custom-border'> <Linkedin className='w-4' /></div>
        <div className='border-x-[0.5px] custom-border px-5'> <Youtube  className='w-4'/></div>
      </div>
    </div>
   </header>
   
   <section className='w-full custom-flex py-4 bg-white'>
   <div className='custom-container  px-2 '>
      <div className='text-black flex justify-around px-6 h-[8rem] max-md:flex max-md:flex-col max-md:items-center'>
          <div className='mt-4 w-50 h-auto max-md:w-32'><img src='image/dsi-logo-large-1.1-300x86.png'></img></div>
          <div className='flex gap-10 max-sm:text-[10px]'>
          <div className='flex justify-center items-center gap-4'>
          <Phone className='text-secondary'/>
              <div>
                <h1 className='font-semibold'>Call Us:</h1>
                <p>+008845754564</p>
              </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
          <Mails className='text-secondary'/>
              <div>
                <h1 className='font-semibold'>Email Us:</h1>
                <p>dreamstudyinternational@mail.com</p>
              </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
          <Navigation className='text-secondary'/>
              <div>
                <h1 className='font-semibold'>location:</h1>
                <p>Gulshan 02</p>
              </div>
          </div>
          </div>
      </div>
    </div>
    </section>
    <header className='w-full custom-flex bg-primary py-5'>
    <div className='  custom-container   px-10 flex justify-between max-sm:flex max-sm:flex-col'> 
      <div>
          <ul className='flex gap-4 '>
           <a href=''> <li className='cursor-pointer '> Home</li></a>
           <a href=''> <li className='cursor-pointer'>About</li></a>
           <a href=''> <li className='cursor-pointer'>Service</li></a>
           <a href=''> <li className='cursor-pointer'>Countries</li></a>
           <a href=''> <li className='cursor-pointer'>Contact</li></a>
           <a href=''> <li className='cursor-pointer'>Privacy Policy</li></a>
          </ul>
      </div>
      <div className='w-28 bg-secondary  px-2 py-2 rounded-lg flex justify-center'>
        <a className='font-semibold cursor-pointer'>Apply Now</a>
      </div>
      </div>
      </header>
   
{/* header section end*/}


{/* Dream Study International section*/}



   <section className='w-full custom-flex py-10'>
    <div className='custom-container  px-2 '>
    <div className='flex justify-center h-20 my-6'> <img src='image/dsi-logo-large-1.1.png'></img></div>
    <div className='flex  gap-8 pt-6 max-md:flex max-md:flex-col max-md:items-center'> 
      <div className='w-[57%]  pt-7 ml-6 max-md:w-[80%]'>
          <img src='image/In-House-Edu-Expo-May25-Dream-Study-International-1536x864.jpg'></img>
      </div>
      <div className='w-[31rem] '>
        <div className='bg-[#24579f] text-[36px] font-bold rounded-t-lg pl-6 py-2'>Apply Now!</div>
        <div className='flex flex-col items-center gap-5 pt-12 bg-third pb-10'>
        <div className='custom-input'>
        <User className='ml-3 w-5 text-gray-700'/>
          <input className='customInput' placeholder='Name'></input>
        </div>
        <div className='custom-input'>
        <Phone className='ml-3 w-5 text-gray-700'/>
          <input className='customInput' placeholder='Phone Number'></input>
        </div>
        <div className='custom-input'>
        <School className='ml-3 w-5 text-gray-700'/>
          <input className='customInput' placeholder='Last Education'></input>
        </div>
        <div className='custom-input'>
        <Earth className='ml-3 w-5 text-gray-700'/>
          <input className='customInput' placeholder='Preferred Country'></input>
        </div>
        <div className='text-white bg-secondary  px-5 py-4 rounded-lg text-xl font-bold ml-[-18rem]'>
          <a className=''>Register</a>
        </div>
        </div>
        
      </div>
    </div>
    </div>
   </section>

{/* Dream Study International section end*/}


{/*We Offer One Stop Solution section*/}

   <section className='w-full custom-flex py-4 '>
    <div className='custom-container  px-2 '>
      
        <div className='flex justify-center'><img src='image/one-stop-768x100.png'></img></div>
        <div className='text-black flex gap-4 flex-wrap justify-center pt-20'>
          <div className='card bg-gray-600 text-white rounded-lg hover:bg-opacity-0 hover:text-black shadow-2xl'>
          <BookCheck className='cardIcon'/>
            <h1>Eligibility Assessment</h1>
          </div>
          <div className='card'>
          <Landmark className='cardIcon'/>
            <h1>University & Program Selection</h1>
          </div>
          <div className='card'>
          <Receipt className='cardIcon'/>
            <h1>Scholarship Application</h1>
          </div>
          <div className='card'>
          <Files className='cardIcon'/>
            <h1>Sponsor Documents Support</h1>
          </div>
          <div className='card'>
          <Captions className='cardIcon'/>
            <h1>Bank Statement Support</h1>
          </div>
          <div className='card'>
          <Mails className='cardIcon'/>
            <h1>SOP Letter Writting</h1>
          </div>
          <div className='card'>
          <FileUser className='cardIcon'/>
            <h1>Visa Application Support</h1>
          </div>
          <div className='card'>
          <PlaneTakeoff className='cardIcon'/>
            <h1>Pre-Departure Information</h1>
          </div>
      </div>
    </div>
    </section>

{/*We Offer One Stop Solution section end*/}


{/*footer start*/}
    <section className='w-full custom-flex pt-36 pb-20'>
    <div className='custom-container  px-2 '>
    <div className='flex gap-5 flex-wrap justify-evenly'>
        <div className='w-96  flex flex-col gap-8 '>
              <img src='image/dsi-logo-large-1.1-300x86.png' className='w-80'></img>
             <div className='w-[22rem]'>
             <p className='text-black text-[18px] text-justify'>
              We are renowned education consultancy for prospective students who would like to study in CANADA, UK, USA, Australia, Sweden, Netherlands, Denmark & other European Countries
              </p>
             </div>
              <div className='text-secondary flex gap-6'>
              < Facebook  className='w-5'/>
               <Instagram  className='w-5'/>
              <Linkedin className='w-5' />
              <Youtube  className='w-5'/>
              </div>
        </div>
        <div className='text-black w-96 flex gap-10  justify-around'>
          <div>
          <div className='text-[25px]   font-bold font-medium'>
         
          <div className=' bg-secondary w-[24px] h-[24px] rounded-full absolute mt-2 ml-[-6px] z-0 opacity-50'></div>
          <h1 className='absolute z-10'>Sitemap</h1>
          
          </div>
          <ul className='list-disc pl-5 cursor-pointe flex flex-col gap-4 text-[17px] mt-16'>
           <a className='text-black flex'> <li className='text-secondary'></li>Home</a>
           <a className='text-black flex'> <li className='text-secondary'></li>About</a>
           <a className='text-black flex'> <li className='text-secondary'></li>Service</a>
           <a className='text-black flex'> <li className='text-secondary'></li>Countries</a>
           <a className='text-black flex'> <li className='text-secondary'></li>Contact</a>
          </ul>
          </div>
          <div>
          <div className='text-[25px]   font-bold font-medium'>
         
         <div className=' bg-secondary w-[24px] h-[24px] rounded-full absolute mt-2 ml-[-6px] z-0 opacity-50'></div>
         <h1 className='absolute z-10'>Countries</h1>
         
         </div>
         <ul className='list-disc pl-5 cursor-pointe flex flex-col gap-4 text-[167x] mt-16'>
          <a className='text-black flex'> <li className='text-secondary'></li>Australia</a>
           <a className='text-black flex'> <li className='text-secondary'></li>Canada</a>
           <a className='text-black flex'> <li className='text-secondary'></li>New Zealand</a>
           <a className='text-black flex'> <li className='text-secondary'></li>USA</a>
           <a className='text-black flex'> <li className='text-secondary'></li>UK</a>
          </ul>
          </div>
        </div>
        <div className='w-96  bg-white text-black rounded-[2rem]'>
            <div className='my-6 mx-4'>
                <img src='image/Capture.png'></img>
            </div>
            <div className='flex pl-5 my-4'>
                <MapPin className='w-10 mt-3 mr-4 text-secondary'/>
                <p>Gulshan-02: House-12B, Lift-04, Flat-4A, Kamal Attaturk Avenue, Gulshan-02, Dhaka-1212.</p>
            </div>
            <div className='flex pl-5'>
            <MessageCircle className='w-5 mr-4 text-secondary'/>
              <p>WhatsApp: +880 14066 99551-4</p>
            </div>
        </div>
    </div>
    </div>
    </section>


    <section className='w-full custom-flex  mt-5 h-16 bg-primary'>
    <div className='custom-container  px-2 '>
     <div className='flex justify-between items-center pt-4'>
     <div className='pl-4'>
          <p>© 2023 Dream Study Int.. Designed By *hirebirds Team.</p>
      </div>
      <div className='flex gap-5'>
        <p>About</p>
        <ul className='flex gap-5 list-disc'>
        <a className='text-white flex px-4'> <li className='text-secondary'></li>FAQ</a>
        <a className='text-white flex pr-4'> <li className='text-secondary'></li>Contact</a>
        </ul>
      </div>
     </div>
    </div>
    </section>

    {/*footer end*/}
    </>
    
  )
}

export default App
