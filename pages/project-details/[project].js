import React, { Component } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import data from '../../utils/data';
import Error from '../404';
    
const ProjectsDetails = ({ projects }) => {
    const router = useRouter();
    const { project } = router.query;
    const proj = projects.filter(i => i.key===project.toLowerCase())[0];

    if (!proj) {
        return <Error/>;
    }
    
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle={proj.name}
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Project Details" 
                bgImgClass="item-bg2" 
            />  

            <div className="projects-details-area ptb-110">
                <div className="container">
                    <div className="projects-details">
                        <div className="row">
                            {
                                proj.images.map(i => 
                                    (
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="projects-details-image">
                                                <img src={i.image} alt={i.key} />
                                            </div>
                                        </div>
                                    )
                                
                                )
                            }                    

                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="projects-details-info">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <ul>
                                                <li><span>Customer Name:</span> { proj.customer }</li>
                                                <li><span>Category:</span> { proj.category }</li>
                                                <li><span>Start Date:</span> { proj.startDate }</li>
                                                <li><span>End Date:</span> { proj.endDate } </li>
                                                <li><span>Status:</span> { proj.status }</li>
                                                <li><span>Demo Link:</span> &nbsp;
                                                    <a href={proj.link} target="_blank">
                                                        { proj.linkText }
                                                    </a>
                                                </li>
                                                <li><span>Platform:</span> {proj.platform}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="projects-details-desc" 
                            dangerouslySetInnerHTML={{ __html: proj.content }}
                        >
                          
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
        </React.Fragment>
    );    
}

ProjectsDetails.getInitialProps = async (ctx) => {
    return { projects: data };
};

export default ProjectsDetails;