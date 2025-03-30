import React from "react";
import { Link } from "react-router-dom";
import imageEvent from "../assets/images/imageEvent.png";
import Frame1 from "../assets/images/Frame1.png";
import Logo from "../assets/images/LogoCVP.svg";
import Footer from "../components/Footer";
import axios from 'axios';
import DonationCard from "../components/DonationCard";
import Navbar from "../components/Navbar"

const enrollment = axios.create({
  baseURL: import.meta.env.VITE_ACCOUNT_ENROLLMENT_URL,
  withCredentials: true
})

function Donations({user}) {
    const [enrollments, setEnrollments] = React.useState();
    const [netError, setNetError] = React.useState(false);
    const [sessionExpired, setSessionExpired] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(function() {
        try {
            enrollment.get()
                .then( (response) => {
                    setEnrollments(response.data)
                    setIsLoading(false)
                })
        
                .catch( (error) => {
                    if(!error.response){
                        console.error("No error response");
    
                        setNetError(true)
    
                        setTimeout(function() {
                            setNetError(false);
                        }, 3000)
                    }
                    else if (error.response?.status == 401) {
                        console.error("Response: " + error.response.status + " \"Unauthorized\"");
                        setSessionExpired(true)
    
                        setTimeout(function(){
                            setSessionExpired(false)
                        }, 3000)
                    }
                    else if (error.response?.status == 404) {
                        console.error("Response: " + error.response.status + " \"Not found\"");
                    }
            
                    setIsLoading(false)
                });
                
        } catch(err) {
            console.error(err)
        }
    
        
    }, [])

    if(enrollments) {
        var enrollmentCards = enrollments.$values.map(enroll => 
            <DonationCard
            image = {enroll.project.imgUrl}
            projectTitle = {enroll.project.title}
            projectSubtitle="Organizado por Cruz Vermelha Portuguesa"
            projectContext={enroll.project.description}
            value={enroll.value}
            />
        )
    }


    return (
        <>
            <Navbar user={user} />

            <div className="main-content">
                <img src={Frame1} alt="Frame1" className="img-fluid w-100" style={{ height: '50vh', objectFit: 'cover' }} />
            </div>
            <div className="container mt-5">
                <h1 className="mb-3">As suas doações</h1>
                <div className="donation-cards-container">
                    <div className="donation-cards-row">
                        {enrollmentCards}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Donations;
