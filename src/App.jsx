import banner from '../src/assets/images/banner.jpg'
import { CgProfile } from "react-icons/cg"
import Posts from './Components/Posts/Posts'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='w-[1280px] mx-auto'>
      <div className='flex justify-between items-center my-[20px]'>
        <div>
          <h2 className='text-3xl font-bold text-black'>Recipetor</h2>
        </div>
        <div className='flex gap-12 text-[16px] font-normal text-[#150B2BB3]'>
          <span>Home</span>
          <span>Recipes</span>
          <span>About us</span>
          <span>Search</span>
        </div>
        <div className='flex justify-between items-center'>
           <span><input type="text"placeholder='search' className='border border-solid border-[#150B2BB3] px-[27px] py-[10px] rounded-[30px]'/></span>
           <span className='text-green-400 text-3xl ml-2'><CgProfile /></span>
        </div>
      </div>
      <div className="banner bg-cover bg-no-repeat bg-center p-[130px] rounded-3xl relative" style={{ backgroundImage: `url(${banner})` }}>
          <h2 className="lexend text-white font-bold text-[52px] text-center max-w-[897px] mx-auto z-10 relative">Discover an exceptional cooking class tailored for you!</h2>
          <p className="mt-6 lexend text-white text-[18px] max-w-[933px] mx-auto text-center z-10 relative">Begin by mastering the basics of cooking - understanding different cooking methods, knife skills, and ingredient pairings. Learn how to sauté, roast, grill, and bake to perfection.</p>
          <div className="flex justify-center mt-[40px] text-white text-xl font-semibold">
          <button className="bg-transparent px-5 py-3 border border-solid border-white z-10 rounded-[52px] hover:bg-[#0BE58A] hover:text-black">Explore Now</button>
          <button className="bg-transparent px-5 py-3 border border-solid border-white z-10 rounded-[52px] hover:bg-[#0BE58A] hover:text-black">Our Feedback</button>
          </div>
          <div className="absolute content-none bg-gradient-to-b from-[#150B2B] to-[#150B2B] top-0 left-0 right-0 bottom-0 rounded-3xl z-0 opacity-30">

          </div>
        </div>
        <div className='mt-[100px]'>
          <h2 className='text-center font-semibold text-[40px]'>Our Recipes</h2>
          <p className='max-w-[832px] mx-auto text-center font-normal text-[16px] text-[#150B2BB3] mt-3'>Next, dive into the world of flavors and ingredients. Explore different herbs, spices, vegetables, meats, and grains. Learn how to balance flavors and elevate simple ingredients into extraordinary meals. </p>
        </div>
        <Posts></Posts>
        
    </div>
  )
}

export default App
