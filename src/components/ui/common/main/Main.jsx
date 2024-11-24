import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;


const Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content className='m-4 p-4 bg-white rounded-lg'>
        <Outlet/>
    </Content>
  );
};
export default Main;