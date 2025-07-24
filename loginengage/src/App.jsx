
import { User } from "lucide-react";
import Users from "./users";


 
export default function App(){
  
  //  const [step, setStep] = useState('email'); 
  //   const [email, setEmail] = useState('');

  //    const handleEmailNext = () => {
  //   if (email.trim()) {
  //     setStep('password');
  //   }
  // };

  // const handleBack = () => {
  //   setStep('email');
  // };

  return (
    <>

    <Users/>
    
    </>
//     <div className="py-[30px] px-[50px] bg-blue(53, 152, 219)" >
     
//       <div className="" >
//         <img 
//   src="https://sgp1.digitaloceanspaces.com/kovaionai.space01/097f1eea-e7dd-4ce9-868c-ccc08c379f92_K%20Logo.png" 
//   alt="Description" 
//   className="w-11 h-11 object-cover rounded-lg"
// />


//       </div>
//       <div className="absolute top-8 right-18">
//           <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//             <span className="text-white font-medium">G</span>
//           </div>
//         </div>

//       <div className="flex items-center 	">
//         <div className="z-inherit">
//           <div className="row flex pt-10 items-center  flex flex-col md:flex-row">
//               <div className="col-md-12 col-sm-6 col-lg-7 left-part">
//                <h1 className="text-[42px] font-bold ">
//                Your <span style={{ color: "rgb(53, 152, 219)" }}>Idea</span> Your <span style={{ color: "rgb(53, 152, 219)" }}>App</span>
//               </h1>

//                 <p>
//                   Kovaion accelerates your app development journey like never
//                   before! It's time to build apps with blazing speed. Experience
//                   the power of app creation with our low-code
//                 </p>
//               </div>
//             <div className="my-20% col-md-12 col-sm-6 col-lg-5 mb-0">
//                   <div className="text-center
//                  py-[30px] px-[25px] bg-white rounded-[10px] shadow-md py-[30%] px-25 z-[9999] ">
//       <div className="text-center ">

       
        
//               <div className="text-left mt-[10%]">
//                         <p className="  pr-[70%]">Welcome Back</p>
//                         <p style={{ color: "rgb(53, 152, 219)" }}className=" font-semibold
//  pr-[80%]">LOGIN</p>
//                         </div>

//               {step ==='email'?(
//                 <>

//     <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-[450px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
//                   placeholder="Enter your email"
//                   onKeyDown={(e) => e.key === 'Enter' && handleEmailNext()}
//                 />

//      <button
//                  onClick={handleEmailNext}
//                  style={{ color: "rgba(255, 255, 255, 1)" }}
//                 className="w-10px  text-white mt-[20px] ml-[75%] py-[2%] px-[13px] rounded-lg font-medium bg-blue-600 transition-colors duration-200 flex items-center justify-center"
//                  disabled={!email.trim()}
//               >
//                 Next
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//               </>

//               ) : (
//                 <>
//                 <input
                 
//                   onChange={(e) => (e.target.value)}
//                   className="w-[450px] px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
//                   placeholder="Enter Your Password"
//                 />
                    
//             <div className="flex justify-between" >
//              <button
//                  onClick={handleBack}
//                 className="w-10px bg-blue-500 text-white mt-[20px]  py-[2%] px-[13px] rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
               
//               >
//                Back
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//               <button
//               type="submit"
                 
//                 className="w-10px bg-blue-500 text-white mt-[20px]  py-[2%] px-[13px]  rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                
//               >
//                Login
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//               </div>


//            </>
//               )}
            
       
//       </div>
//     </div>
 
//             </div>
//           </div>
//         </div>
//       </div>
//        <div className="flex items-center justify-end pt-[11%]">
//           <span className="text-gray-500 text-sm mr-2">Powered by</span>
//           <div className="flex items-center">
//             <div className="bg-blue-500 rounded p-1 mr-2">
//               <div className="text-white font-bold text-xs"> </div>
//             </div>
//             <span className="text-blue-500 font-semibold">kovaion</span>
//             <span className="text-blue-400 text-xs ml-1">AI</span>
//           </div>
//         </div>
//     </div>
  );
};
 