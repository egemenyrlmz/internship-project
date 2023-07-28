import React from "react"
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();
    return(
        <div>
        <div className="deneme" >
            <nav id="primary_nav_wrap">
                <ul>    
                
                <li><a onClick={() => navigate("/MyClasses")}>My Classes</a>
                    <ul>
                    <li><a href="#">ECON305</a>
                    
                    </li>
                    
                    <li><a href="#">ECON307</a>
                    <ul>
                        <li><a href="#">Section A</a>
                        </li>
                        <li><a href="#">Section B</a>
                        <ul>
                            <li><a href="#">Morning Section</a></li>
                            <li><a href="#">Afternoon Section</a></li>
                            </ul></li>
                    </ul>
                    </li>
                    <li><a href="#">MATH202</a>
                    </li>
                    
                    </ul>
                </li>
                <li><a onClick={() => navigate("/MyStudents")}>My Students</a>
                </li>
                <li><a onClick={() => navigate("/Announcements")}>Announcements</a>
                </li>
                <li><a onClick={() => navigate("/MyProfile")}>My Profile</a></li>
                
                
                </ul>
            </nav>

            
        </div>
        
            <Link to="/dashboard">
            <img className="image123"

                width={198}
                src="https://www.cam.ac.uk/sites/www.cam.ac.uk/files/inner-images/logo.jpg"
                alt="Logo"
            />
            </Link>
    </div>
    )
}


export default Navbar