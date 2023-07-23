import React from 'react';


const DemoProfile = () => {
  return (
    <div className="profile">
      <h1>Trần Duy Nhân</h1>
      <p>
        <strong>Objective:</strong> Aspiring web developer seeking an internship opportunity to apply and enhance my
        knowledge of Java, JavaScript, ReactJS, and HTML while contributing to a dynamic and innovative team.
      </p>
      <p>
        <strong>Education:</strong> Bachelor of Computer Science (Expected Graduation: 2025) <br />
        FPT University, Hồ Chí Minh, Việt Nam
      </p>
      <p>
        <strong>Skills:</strong>
      </p>
      <ul>
        <li>Programming Languages: Java, JavaScript</li>
        <li>Web Development: ReactJS, HTML</li>
        <li>Problem-Solving: Strong analytical and critical thinking abilities</li>
        <li>Communication: Effective verbal and written communication skills</li>
      </ul>
      <h2>Projects:</h2>
      <ol>
        <li>
          <strong>Personal Portfolio Website</strong>
          <ul>
            <li>
              Developed a personal portfolio website using ReactJS and HTML to showcase projects and skills.
            </li>
            <li>Implemented responsive design for optimal viewing across various devices.</li>
            <li>
              Link: <a href="https://example.com/portfolio" target="_blank" rel="noopener noreferrer">Personal Portfolio</a>
            </li>
          </ul>
        </li>
        <li>
          <strong>JavaScript Game</strong>
          <ul>
            <li>Created a simple browser-based game using JavaScript, demonstrating proficiency in DOM manipulation and event handling.</li>
            <li>Applied fundamental programming concepts to develop interactive gameplay.</li>
            <li>
              Link: <a href="https://example.com/game" target="_blank" rel="noopener noreferrer">JavaScript Game Demo</a>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        <strong>Languages:</strong>
        <br />
        {/* Add any additional languages here if applicable */}
      </p>
      <h2>Personal Projects and Hobbies:</h2>
      <p>
        {/* Add any relevant personal coding projects or hobbies here, if applicable */}
      </p>
      <p>
        <strong>References:</strong> Available upon request.
      </p>
    </div>
  );
};

export default DemoProfile;
