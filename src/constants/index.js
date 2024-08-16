import project1 from "../assets/projects/Todo list.png";
import project2 from "../assets/projects/Blog app.png";
import project3 from "../assets/projects/Portfolio.png";
import project4 from "../assets/projects/Quiz app.png";

export const HERO_CONTENT = `A passionate and detail-oriented MERN stack developer seeking an entry-level position where I can apply my skills in MongoDB, Express.js, React.js, and Node.js to build scalable and efficient web applications. Eager to contribute to a dynamic team and grow as a full-stack developer.`;

export const SOCIAL_LINK = {
  linkedin : 'https://www.linkedin.com/in/salmon-m-954877287/',
  github : 'https://github.com/salmon-mohanrajan'
}

export const ABOUT_TEXT = `I'm a engineering graduate specialized in Mechanics, with an overall CGPA of 7.9 percent. Along with my degree, I have completed MERN Full stack web development Course..

During my academic journey, I have gained a solid foundation in web technologies including HTML, CSS, JavaScript and React JS. I have also familiarized myself with back-end technologies such as Node.js and Express js, and having experience working with database such MongoDB and MySQL. My coursework and projects have provided me with hands-on experience in building responsive and user-friendly web applications.

One of my notable projects are Todo-List, Blog-Application and Quiz-Application where I performed as a Full Stack Developer. This project not only honed my technical skills but also taught me the importance of teamwork, problem-solving, and effective communication.

In addition to my technical skills, I'm a quick learner, highly motivated and have a strong attention to detail.`;

export const EXPERIENCES = [
  {
    year: "October 2023 - March 2024",
    role: "Full Stack Developer - Intern",
    company: "Relearn School",
    description: `Designing and developing responsive and user-friendly web applications using React.js. Implementing state management using Redux or React Context API. Writing clean, maintainable, and scalable code following best practices. Collaborating with cross-functional teams, including designers 
and backend developers. Participating in code reviews and providing constructive feedback  `,
    technologies: ["Javascript", "React.js", "Node.js", "Express.js" , "mongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "Todo-List Application",
    image: project1,
    description:
      "An full-stack web application built using the MERN stack technologies. This project provides users with a simple and intuitive platform to manage their daily tasks. Users can add, update, and delete tasks",
    technologies: ["HTML", "Bootstrap", "React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Blogging Application",
    image: project2,
    description:
      "An web application built using MERN Stack. This provides user to view the latest blog posted by the admin.",
    technologies: ["HTML", "Bootstrap", "React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React.js", "Tailwind CSS"]
  },
  {
    title: "Quiz Application",
    image: project4,
    description:
      "Created a dynamic question management system allowing admins to add, edit, and delete quiz questions.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const config = {
  resumeLink: '',
  internshipLink: 'file:///C:/Users/H%20P/Documents/Certificate%20&%20Documents/Certificate%20PDF/Internship%20Certificate%20-%20Salmon%20MS.pdf'
}

export const CONTACT = {
  phoneNo: "+91 9943962873",
  email: "salmon.mohanrajan@gmail.com",
};
