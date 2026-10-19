import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import Uses from './components/Uses';
import Api from './components/Api';
import Axious from './components/Axious'
import Asyncs from './components/Asyncs';

function App() {

  const jobOpenings = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg",
    companyName:"Amazon",
    post: "Senior UI/UX Designer",
    tag1:"Full Time",
    tag2: "Senior Level",
    payPerHour: "$140/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    companyName: "Google",
    post: "Senior UI/UX Designer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$85/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    companyName: "Microsoft",
    post: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    companyName: "Amazon",
    post: "React Developer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$75/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    companyName: "Meta",
    post: "Product Designer",
    datePosted: "3 days ago",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: "$95/hr",
    location: "Remote, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    companyName: "Apple",
    post: "iOS Developer",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$70/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    companyName: "Netflix",
    post: "Backend Engineer",
    datePosted: "4 days ago",
    tag1: "Contract",
    tag2: "Senior Level",
    payPerHour: "$110/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    companyName: "Adobe",
    post: "Graphic Designer",
    datePosted: "1 day ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$72/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968770.png",
    companyName: "Uber",
    post: "Mobile App Developer",
    datePosted: "2 weeks ago",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: "$90/hr",
    location: "Remote, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    companyName: "Spotify",
    post: "Music App Intern",
    datePosted: "5 days ago",
    tag1: "Internship",
    tag2: "Junior Level",
    payPerHour: "$40/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    companyName: "LinkedIn",
    post: "Full Stack Developer",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$80/hr",
    location: "Gurgaon, India",
  },
];
  return (
    <>

    <Api/>
    <Axious/>
     <Asyncs/>
    </>
  )
}

export default App
