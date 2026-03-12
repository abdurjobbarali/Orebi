
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import logo from '/src/assets/Logo.svg'

const Header = () => {
  return (

<div className='bg-[#c4c4c4] '>
<Container>
<Flex className={"w-full justify-between py-8"}>
  <div className="w-[40%]">
  <Image src={logo}/>
  </div>
  <div className="w-[60%]">
    <ul className='flex gap-x-5  '>
    <li className='text-[14px] font-normal text-menu hover: font-blod hover:text-black duration-300' >
     <Link to={"/"}>Home</Link>
      </li>
    <li className='text-[14px] font-normal text-menu hover: font-blod hover:text-black duration-300'>
     <Link to={"/"}>Shop</Link>
      </li>
    <li className='text-[14px] font-normal text-menu hover: font-blod hover:text-black duration-300'>
     <Link to={"/"}>About</Link>
      </li>
    <li className='text-[14px] font-normal text-menu hover: font-blod hover:text-black duration-300'>
     <Link to={"/"}>Contact</Link>
      </li>
   
   
      
    </ul>
  </div>
</Flex>
</Container>
</div>
  
  )
}

export default Header