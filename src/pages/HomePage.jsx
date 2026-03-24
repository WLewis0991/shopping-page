import { Link } from "react-router-dom"
import HeroImage from "../assets/shopping-hero.png"

export default function Homepage() {

    return(<>
    <div className="homepage-body">
        <div className="homepage-container">
            <div className="homepage-info">
                <p><span>Luma</span> is a modern e-commerce platform designed to bring everything you 
                    need into one place. From fashion and accessories to electronics and 
                    everyday essentials, Luma offers a seamless and convenient shopping 
                    experience built around variety, simplicity, and style.</p>
                <br />
                <br />                
                <Link to="products"> <button>Shop Now</button></Link>
            </div>
            <div className="homepage-image">
                <img src={HeroImage} alt="" className="hero-image"/>
            </div>
        </div>
    </div>
    </>)
}