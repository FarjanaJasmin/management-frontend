import React, { useState } from 'react';
import {
    DashboardOutlined,
    InsertRowAboveOutlined
  } from '@ant-design/icons';

  import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', 'sub1', <DashboardOutlined />, [
    getItem('Admin', 'admin'),
    getItem('Teacher', 'teacher'),
    getItem('Student', 'student')
  ]),
  getItem('Routine', 'routine', <InsertRowAboveOutlined />)
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  
    const handleMenuClick = (e)=>{
      navigate(`/${e.key}`);
    }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick}/>
    </Sider>
  )
}

export default Sidebar;
