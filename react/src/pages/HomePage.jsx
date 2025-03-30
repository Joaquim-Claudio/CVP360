import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import '../styles/SubscribePopup.scss';
import Footer from "../components/Footer";
import HomepageCard from "../components/HomepageCard";
import Navbar from "../components/Navbar"
import axios from 'axios';

const feed = axios.create({
  baseURL: import.meta.env.VITE_ACCOUNT_FEED_URL,
  withCredentials: true
})


function HomePage({user}){

    
      const [projects, setProjects] = React.useState();
      const [netError, setNetError] = React.useState(false);
      const [sessionExpired, setSessionExpired] = React.useState(false);
      const [isLoading, setIsLoading] = React.useState(true);
    
      React.useEffect(function() {
        try {
            feed.get()
                .then( (response) => {
                    setProjects(response.data)
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

    if(projects) {

        const campaigns = projects.$values.filter(p => p.categoryId === 1);
        const events = projects.$values.filter(p => p.categoryId === 2);
        var eventCards = events.map(project => 
            <HomepageCard
            image = {project.imgUrl}
            title = {project.title}
            subtitle="Organizado por Cruz Vermelha Portuguesa"
            context={project.description}
            day={new Date(project.startDate).getDay()}
            month={new Date(project.startDate).getMonth()}
            btnTxt={project.actionText}
            /> 
        )

        var campaignCards = campaigns.map(project => 
            <HomepageCard
            image = {project.imgUrl}
            title = {project.title}
            subtitle="Organizado por Cruz Vermelha Portuguesa"
            context={project.description}
            day={new Date(project.startDate).getDay()}
            month={new Date(project.startDate).getMonth()}
            btnTxt={project.actionText}
            /> 
        )
    }

    return(
        <>
            <Navbar user={user} />
            
            <div className="main-content">
                <ImageCarousel />
            </div>
            <div className="container mt-5">
                <h1 className="mb-3 mt-5">Eventos</h1>
                <div className="homepage-cards-container">
                    <div className="homepage-cards-row">
                       {eventCards}                                              
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="section-divider"></div>
                <h1 className="mb-3 mt-5">Projetos</h1>
                <div className="homepage-cards-container">
                    <div className="homepage-cards-row">
                        {campaignCards}
                    </div>
                </div>
            </div>

            
            <Footer/>
        </>
    )
}

export default HomePage;