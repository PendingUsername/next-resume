import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];
export const Projects = [
  {
    title: "Cloud Resume Project",
    text: "The frontend of the web application is built using HTML, CSS, and JavaScript and is hosted on Amazon S3. Amazon CloudFront is used to distribute the web application and improve its performance. The web application interacts with a RESTful API built using AWS Lambda and Amazon API Gateway. The API is responsible for handling user requests and retrieving and storing data in Amazon DynamoDB. IAM is used to manage access to AWS resources for users and services. ACM is used to manage SSL/TLS certificates for secure communication between the web application and the API. DynamoDB is used to store and retrieve data for the web application. Github Actions is used to automatically build and deploy the web application to S3 and the API to Lambda. Route 53 is used to route user requests to the CloudFront distribution. AWS Firewall Manager is used to manage security rules for the web application.",
    src: "/CloudResume.png",
  },
  {
    title: "EBS Calculator",
    text: "Python + Flask deploy to Amazon Web Services Elastic Beanstalk (CI/CD with Git, CodePipeline). This is a simple HTML/CSS and Python code for an online calculator that performs arithmetic operations based on user input. ",
    src: "/ebs-calc.png",
  },
  {
    title: "Microservices",
    text: " Real world AWS Microservices.",
    src: "/microservices.png",
  },
  {
    title: "Simple Finance Application",
    text: "A simple finance app using vue.js ",
    src: "/SimpleFinance.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];