import { Layout } from 'antd';
import Sidebar from './components/ui/common/Navbar/Sidebar';
import Footer from './components/ui/common/footer/Footer';
import MainHeader from './components/ui/common/Navbar/MainHeader';
import Main from './components/ui/common/main/Main';


const App = () => {
  return (
    <Layout className='min-h-screen'>
      <Sidebar/>
      <Layout>
        <MainHeader/>
        <Main/>
        <Footer/>
      </Layout>
    </Layout>
  );
};
export default App;