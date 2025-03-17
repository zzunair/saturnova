
import Image from 'next/image';
import architect from '../../public/Images/cube1.png';
import engineer from "../../public/Images/software-application.png";
import reeningneer from "../../public/Images/technical-support.png";
import '../Styles/IconText.css';

export default function IconText() {
    const services = [
        {
          icon: architect, // Make sure to add these icons to your public folder
          title: 'Architect your Solution',
          description: 'Our team zeroes in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.'
        },
        {
          icon: engineer,
          title: 'Engineer your Solution',
          description: 'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.'
        },
        {
          icon: reeningneer,
          title: 'ReEngineer your Business Process',
          description: 'Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.'
        }
      ];
      
  return (
    <section className="icon-text-section mt-60 mb-60">
      <div className="icon-text-container custom-container">
        <div className="icon-text-grid">
          {services.map((service, index) => (
            <div key={index} className="icon-text-service-card">
              <div className="icon-text-icon-wrapper">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={80} 
                  height={80}
                  className="service-icon"
                />
              </div>
              <div className="icon-text-conteent">
                <h3 className="icon-text-icon-text mb-10">{service.title}</h3>
                <p className="icon-text-icon-text-gray">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}