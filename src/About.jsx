import { Link } from "react-router-dom"

export default function About () {
    return (
        <>
    <div className="about-page">
      <h3>About</h3>
      <p>
        Welcome to Number Blast, a reaction based number game designed to test your speed against the clock!
      </p>

      <h4>What is Number Blitz?</h4>
      <p>
        Number Blast is a sleek and intuitive mobile game built using React and powered by Firebase.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li><strong>Addictive Gameplay:</strong> Number Blitz offers a perfect blend of simplicity and complexity, making it suitable for players of all skill levels. Can you top the leaderboard and become the ultimate Number Blitz champion?</li>
        <li><strong>Global Leaderboard:</strong> Compete against players from all over the world and see how your skills stack up. Will you make it to the top?</li>
        <li><strong>Beautiful Design:</strong> We've taken great care to ensure that Number Blitz not only challenges your mind but also pleases your eyes with its clean and attractive design.</li>
        <li><strong>Responsive and User-Friendly:</strong> Number Blitz is designed with mobile devices in mind, ensuring a smooth and enjoyable experience on smartphones and tablets.</li>
      </ul>

      <h4>Why Number Blitz?</h4>
      <p>
        If you're considering hiring a junior full-stack developer, Number Blitz is a testament to my skills and passion for creating engaging web applications. This project showcases my proficiency in React and my ability to integrate Firebase for real-time features like leaderboards.
      </p>

      <h4>Get in Touch</h4>
      <p>
        I'm excited to hear from you! If you'd like to discuss my work on Number Blitz, have any questions, or want to explore potential collaborations, please don't hesitate to reach out. I'm eager to contribute my skills and enthusiasm to your team as a junior full-stack developer.
      </p>

      <p>
        Thank you for visiting Number Blitz, and I look forward to connecting with you soon!
      </p>
    </div>

            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/">Back   </Link>
        </>
    )
}