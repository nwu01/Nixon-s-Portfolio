import './About.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <div id="About" className="About-Container">
  
  <VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Feb 2021 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<i class="fa fa-database fa-2x"></i>}
    icon={<i class="fas fa-suitcase fa-2x"></i>}
  >
    <h3 className="vertical-timeline-element-title">Data Analyst/Database Administrator</h3>
    <h4 className="vertical-timeline-element-subtitle">RCMP (Royal Canadian Mounted Police) - Vancouver, BC</h4>
    <p>
      Technology: MySQL, Cognos
    </p>
    <ul className='timeline-list'>
        <li>User Experience</li> 
        <li>Graphic Visual Design</li>
        <li>Database Management</li>
      </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="June 2019 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<i class="fa fa-database fa-2x"></i>}
    icon={<i class="fas fa-suitcase fa-2x"></i>}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Minisis Inc. - Vancouver, BC</h4>
    <p>
      Technology: React/Bootstrap, JavaScript, C#, .NET, Git
    </p>
    <ul className='timeline-list'>
      <li>Full Stack Development</li>
      <li>User Experience</li> 
      <li>Visual Design</li>
      <li>Database Management</li>
      <li>Team Leading</li>
      <li>Project Management</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<i class="fas fa-suitcase fa-2x"></i>}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Angel Glass Corporation - Vancouver, BC</h4>
    <p>
      Technology: FileMaker, MySQL, JavaScript, Wordpress (PHP)
    </p>
    <ul className='timeline-list'>
      <li>Full Stack Development</li>
      <li>User Experience</li> 
      <li>Database Management</li>
    </ul>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015 - 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<i class="fas fa-university fa-2x"></i>}
  >
    <h3 className="vertical-timeline-element-title">British Columbia Institute of Technology - Burnaby, BC</h3>
    <h4 className="vertical-timeline-element-subtitle">Computer Systems Technology - Diploma</h4>
    <p>
      <ul className='timeline-list'>
        <li>Participate in all aspects of software development and maintenance</li> 
        <li>Design and code with widely-used programming languages</li>
        <li>Develop and maintain complex software systems that integrate scalable components</li>
        <li>Apply logical, critical, and creative thinking to synthesize solutions to computing and IT problems</li>
      </ul>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className='timeline-resume'
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<i class="fas fa-star fa-2x"></i>}
  >
    <h3 className="vertical-timeline-element-title">Download my Resume</h3>

    <p>
      <span className='about-contact-me'>
        <a href="#Contact">Still have questions? Contact me!</a>
      </span>
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>

    </div>
  );
}

export default About;