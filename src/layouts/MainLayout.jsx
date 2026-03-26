import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout(props){
  const {cartSize} = props

    return(<>
        <NavBar cartSize={cartSize}/>
      <main>
        <Outlet />
      </main>
    </>)

}