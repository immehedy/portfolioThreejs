import {BsSearch} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex items-center w-full justify-center gap-2 text-white py-2'>
        <div className='flex-1 flex gap-8 items-center'>
        <h2 className='text-[30px] font-semibold'>fourbit</h2>
        <ul className='flex gap-6 items-center'>
            <li>Home</li>
            <li>Studio</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </div>
    <div className='flex gap-4 items-center'>
        <BsSearch/>
        <button className='bg-btn-primary px-2 py-1 rounded-sm font-semibold '>Hire now</button>
    </div>
    </div>
  )
}

export default Navbar