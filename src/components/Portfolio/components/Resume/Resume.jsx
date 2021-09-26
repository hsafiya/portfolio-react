function Resume() {
    return (
      <div className="section">
        <p className="section-title">Resume</p>
        <a
          href="https://docs.google.com/document/d/1s4TfPhL2Zzb6Gt2TYVPRw331vaRtt9n3/edit?usp=sharing&ouid=104769092170935581218&rtpof=true&sd=true"
          className="resume"
          target="blank"
        >
          Click Here to View
        </a>
        <div className="resume-body">
          <ul className="skills">
            <p className="skills-title">Front End</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>API</li>
          </ul>
          <ul className="skills">
            <p className="skills-title">Back-end</p>
  
            <li>Node</li>
            <li>Express</li>
            <li>MySql</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Resume;