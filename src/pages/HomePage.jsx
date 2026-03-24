import { Link } from "react-router-dom"

export default function Homepage() {

    return(<>
    <div className="homepage-body">
        <div className="homepage-container">
            <div className="homepage-info">
            <Link to="products"> <button>Shop Now</button></Link>
            </div>
            <div className="homepage-image">

            </div>
        </div>
    </div>
    </>)
}