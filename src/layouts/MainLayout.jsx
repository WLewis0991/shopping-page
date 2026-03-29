import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout(props){
  const {cart} = props

    return(<>
        <NavBar cart={cart}/>
      <main>
        <Outlet />
      </main>
    </>)

}