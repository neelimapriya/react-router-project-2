import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between px-10 py-5 shadow-md">
        <div><h1 className="text-2xl text-red-900 font-bold">Amajhon</h1></div>
        <nav>
            <ul className="flex gap-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
        
      </section>
      <div className="min-h-screen"><Outlet></Outlet></div>
      
    <Footer></Footer>


    </div>
  );
};

export default MainLayout;
