
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { showDiv, hideDiv,} from '../features/manage account/ManageAccount';

function Profile() {
     const savedUser = JSON.parse(localStorage.getItem("user"));
    
    const dispatch = useDispatch()
    const showD = useSelector((state)=>state.manage.value)
   const handleDeleteAccount = () => {

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(!savedUser) return;
    // load all users
    let users = JSON.parse(localStorage.getItem("users")) || []
    // to remove current user
    users = users.filter((u) =>u.email !== savedUser.email);
    // to save updated user list
    localStorage.setItem("users", JSON.stringify(users));
    // remove current session
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn")
    // to redirect to home|| popup login modal
    
     window.location.href = "/home"; 
   }
  
  return (
 
    <div className='bg-[#fef2f2] py-9'>

        <div hidden={!showD} className='z-50 absolute flex justify-center items-center h-screen inset-0  '>
            <div className='w-80 h-60 rounded-md shadow-2xl bg-white'>
                <div className='flex justify-between p-6 items-center'>
                    <p className='text-xl font-medium text-[#57534e]'>Are you Sure</p>
                    <div className='flex items-center text-center'>
                         <i onClick={()=> dispatch(hideDiv())} className='bx text-xl font-bold rounded-2xl border-3 h-8 w-8 text-[#ef4444] bx-x' ></i> 

                    </div>
                   
                   
                </div> 
                <div className='text-center flex justify-center items-center py-10'>
                    <p className='text-[#57534e]'>it will remove your all information.</p>
                </div>

                <div className='flex justify-center gap-3'>
                    <button onClick={handleDeleteAccount} className='border-2 w-20 h-8 rounded-md border-[#ef4444] text-[#ef4444] hover:border-0 hover:bg-[#ef4444] hover:text-[white]'>Yes</button>
                    <button onClick={()=> dispatch(hideDiv())} className=' w-20 h-8 rounded-md bg-[#ef4444] text-[white] hover:border-2 hover:bg-[white] hover:text-[#ef4444]'>No</button>

                </div>
                

            </div>


        </div>


         
 <div className={`transition-all ${showD  ? "opacity-20" : ""}`}>


        <div className='px-6'>
            <p className='text-3xl font-bold text-[#57534e]'>Profi<span className='text-[#ef4444]'>le</span></p>
        </div>

        <div className='lg:flex flex justify-center py-18'>
            <div className=' flex justify-evenly items-center rounded-2xl  shadow-2xl w-90 md:w-180 lg:w-260 lg:h-40'>
                {/* profile img */}


                <div >
                    <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          className=" w-20 lg:w-30 lg:h-30 rounded-full mx-auto"
          alt="user"
        />

                </div>
                {/* profile name */}

                <div>
                    <p className='text-[#57534e] text-xl md:text-3xl lg:text-3xl'>{savedUser?.username}</p>
                </div>


                <div>
                   <Link to='/editprofile'>
                   <i class='bx text-2xl md:text-3xl lg:text-4xl text-[#ef4444] bx-pencil-circle'></i> 

                   </Link>
                    
                </div>







            </div>





        </div>
        {/* account manage */}

        <div className='lg:flex flex justify-center'>
             <div className='flex items-center  shadow-2xl w-70 md:w-120 lg:w-160 h-30  rounded-2xl'>
               
                <div>

                     <div className='flex gap-3 px-3 items-center mb-3 '>
                        <i className='bx text-2xl text-[#ef4444]  bx-lock' ></i>
                        <Link to='/changepassword'>
                          <p className='text-xl hover:text-[#ef4444]'>Change Password</p>
                            </Link> 
                  
                </div>
                <hr className='lg:w-156 text-gray-300' />


                <div className='flex gap-3 px-3 items-center py-3'>
                    <i className='bx text-2xl text-[#ef4444]   bx-trash' ></i> 
                    <p onClick={()=> dispatch(showDiv())} className='text-xl hover:text-[#ef4444]'>Delete Account</p>
                </div>

                </div>
               

            </div>
        </div>
           

           </div>
      
    </div>
    
  )
}

export default Profile
