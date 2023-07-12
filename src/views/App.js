import { Routes, Route } from 'react-router-dom';
// import { Layout } from "antd";
// import HeaderLayout from "../components/layout/Header";
import DefaultLayout from './layout/DefaultLayout';
import Komoditas from "../components/komoditas/Komoditas";

function User () {
  return (
    <div>
      User View
    </div>
  )
}

function App () {
  // const { Header, Content } = Layout;

  return (
    // <Layout style={{ minWidth: 450 }}>
    //   <Header
    //     style={{ position: "fixed", zIndex: 1, width: "100%", background: "#fff" }}
    //   >
    //     <HeaderLayout />
    //   </Header>
    //   <Content
    //     className="content-layout-wrapper"
    //     style={{ padding: "0 16px", marginTop: 64 }}
    //   >
    //     <Komoditas />
    //   </Content>
    // </Layout>

    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Komoditas />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
