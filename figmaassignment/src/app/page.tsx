import Navbar from "./Navbar/navbar";

export default function home () {
  return (
    <div className="bg-[#252B42] h-[850px] flex flex-col items-center;">
  
  <nav className="w-full py-6 flex justify-between items-center px-12">
  <h3 className="text-white font-bold text-xl">BrandName</h3>
  <div className="flex space-x-8 text-white">
    <a href="#" className="hover:text-[#23A6F0]">Home</a>
    <a href="#" className="hover:text-[#23A6F0]">Pricing</a>
    <a href="#" className="hover:text-[#23A6F0]">Contact</a>
    <a href="#" className="hover:text-[#23A6F0]">Product</a>
  </div>
  <div className="flex space-x-6">
    <a href="#" className="text-white pt-2 hover:text-gray-400">Login</a>
    <button className="bg-blue-500 text-white py-2 px-4 rounded-l-md hover:bg-blue-600 ">JOIN US</button>
  </div>
  </nav>
  
  <div className="text-center mt-12">
  <p className="text-blue-400 text-sm mb-4">Welcome</p>
  <h1 className="text-white text-5xl font-bold mb-6">Selling on the <br/> internet like a pro</h1>
  <p className="text-gray-300 text-lg mb-10"> We know how large objects will act, but things on a <br/>small scale just do not act that way.
  </p>
  <div className="flex justify-center space-x-4">
    <button className="bg-[#23A6F0] border-[#23A6F0] text-white py-3 px-8 rounded-lg w-193 hover:bg-blue-600">Get Quote Now</button>
    <button className="border border[#23A6F0] text-[#23A6F0] py-3 px-8 rounded-lg w-162 hover:bg-blue-600 hover:text-white">Learn More</button>
  </div>
  </div>


       <div className="w-[1046px] h-[292px] m-auto flex gap-[30px]">
               <div className="w-[328px] h-[292px] py-[35px] px-10 bg-white gird gap-5 hover:bg-gray-100">
                 <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px]"></div>
                 <h5 className="font-bold text-base text-[#252B42]">trainging Courses</h5>
                 <hr className="w-[50px] h-[2px] bg-[#E74040]"/>
                 <p className="text-5m text-[#737373]">
                   The gradual accumulation of information about atomic and 
                   small-scale behaviour...
                 </p>
               </div>
               <div className="w-[328px] h-[292px] py-[35px] px-10 bg-white gird gap-5 hover:bg-gray-100">
                 <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-[10px]"></div>
                 <h5 className="font-bold text-base text-[#252B42]">2,769 online courses</h5>
                 <hr className="w-[50px] h-[2px] bg-[#E74040]"/>
                 <p className="text-5m text-[#737373]">
                   The gradual accumulation of information about atomic and 
                   small-scale behaviour...
                 </p>
             </div>
             <div className="w-[328px] h-[292px] py-[35px] px-10 bg-white gird gap-5 hover:bg-gray-100">
                 <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px]"></div>
                 <h5 className="font-bold text-base text-[#252B42]">trainging Courses</h5>
                 <hr className="w-[50px] h-[2px] bg-[#E74040]"/>
                 <p className="text-5m text-[#737373]">
                   The gradual accumulation of information about atomic and 
                   small-scale behaviour...
                </p>
           </div>
</div>
</div>
  );
}