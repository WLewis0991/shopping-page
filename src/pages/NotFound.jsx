import { Link } from "react-router-dom"
export default function NotFound(){

    return(<>
    <div className="not-found-page">
        <p>404 page not found </p>
        <Link to="/">
        <button>Return Home</button>
        </Link>
    </div>
    </>)
}