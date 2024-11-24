import { Layout} from 'antd';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className='px-10 bg-[#ffffff] flex justify-between'>
       <div className='w-3/4 flex justify-center items-center'>
        <NavLink to="/" className='font-medium text-xl'>
          Management
        </NavLink>
       </div>
       <div className='w-1/4 text-end'>
        <NavLink to="/login"> 
          Login
        </NavLink>
       </div>
    </Header>
  );
};

export default MainHeader;