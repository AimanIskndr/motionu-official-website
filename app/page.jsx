import HeroText from "./components/HeroText";
import Heading from "./components/Heading";
import ActivityCard from "./components/ActivityCard";
import { FaCampground } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import Image from "next/image";
import MembershipPerkCard from "./components/MembershipPerkCard";
import { FaBookReader } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import CollaboratorLogo from "./components/CollaboratorLogo";

export default function page() {
  return (
    <section>
      <main>
        <section className="h-screen flex justify-center items-center pb-20 bg-gradient-to-br	from-sky-300 via-white to-sky-300">
          <HeroText></HeroText>
        </section>
        <section className="my-10">
          <div className="flex flex-col justify-center items-center  text-center">
            <Heading text={"Activities"}></Heading>
            <div className=" md:lg:grid md:lg:grid-cols-3 sm:grid-cols-2 gap-10 m-10">
              <ActivityCard
                activityDesc={
                  "Engage in discussions, learn strategies, and gain insights into tech entrepreneurship through informative sessions and interactive workshops"
                }
                activityImage={<FaBullhorn></FaBullhorn>}
                activityTitle={"Workshop and Talk"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Collaborate, innovate, and develop real-world solutions while applying entrepreneurial principles in exciting technopreneurial projects"
                }
                activityImage={<FaProjectDiagram></FaProjectDiagram>}
                activityTitle={"Projects"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Dive into immersive training sessions, hone skills, and build networks with like-minded individuals in intensive technopreneurship bootcamps"
                }
                activityImage={<FaCampground></FaCampground>}
                activityTitle={"Bootcamp"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Enter our entrepreneurship competition, pitch your prototype, win prizes. Connect with mentors, investors, and peers to launch your startup."
                }
                activityImage={<FaTrophy></FaTrophy>}
                activityTitle={"Competition"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Join our study group focused on web and mobile app development, where we delve into coding, deploying websites, and exploring frameworks. Collaborate, learn, and grow your technical skills with us!"
                }
                //
                activityImage={<FaBookReader></FaBookReader>}
                activityTitle={"Study Group"}
              ></ActivityCard>
              <ActivityCard
                activityDesc={
                  "Join our entrepreneurship club for networking, learning, and collaboration. Connect with fellow members, exchange ideas, and create together in a supportive community. "
                }
                activityImage={<FaPeopleGroup></FaPeopleGroup>}
                activityTitle={"Community"}
              ></ActivityCard>
            </div>
          </div>
        </section>
        <section className="bg-sky-400 py-10">
          <div className="mb-5 text-center">
            <Heading text={"Membership perks"} lightFont={true}></Heading>
          </div>
          <div className="flex flex-col mx-2 lg:grid grid-cols-3 gap-5 xl:px-72 lg:px-32">
            <MembershipPerkCard
              title={"Participate in our workshops"}
              description={
                "Sharpen your skills with exclusive workshops tailored to your interests and career goals. Learn from industry experts and gain hands-on experience to excel in your field."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Participate in our DevTalks"}
              description={
                "Get inspired by thought-provoking discussions with industry leaders and innovators. Stay ahead of trends and expand your network with engaging talks and presentations."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Become a program committee member"}
              description={
                "Shape the future of Motion-U by joining our committee. Contribute your ideas and leadership skills to drive impactful events and programs for our community."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Compete for mainboard position"}
              description={
                "Compete for a prestigious mainboard position and lead our organization towards excellence. Showcase your vision and dedication to make a lasting impact on Motion-U."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Join AGM and AGD"}
              description={
                "Participate in our Annual General Meetings and Discussions to have your voice heard and influence the direction of Motion-U. Gain insights into our performance and contribute to our strategic decisions."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Monthly Meetups"}
              description={
                "Connect with like-minded members at our monthly meetups. Share experiences, collaborate on projects, and build lasting relationships in a supportive environment."
              }
            ></MembershipPerkCard>
          </div>
        </section>
        <section className="p-10">
          <h2 className="text-3xl text-sky-700 font-bold text-center pb-8">
            Our collaborators
          </h2>
          <div className="flex flex-col items-center justify-center  md:lg:flex-row    gap-9">
            <CollaboratorLogo image={"/images/iium.png"}></CollaboratorLogo>
            <CollaboratorLogo image={"/images/kict.png"}></CollaboratorLogo>
            <CollaboratorLogo image={"/images/cita.png"}></CollaboratorLogo>
            <CollaboratorLogo image={"/images/mulhaq.png"}></CollaboratorLogo>
            <CollaboratorLogo
              image={"/images/ictss_logo.jpg"}
            ></CollaboratorLogo>
          </div>
        </section>
      </main>
      {/* just a comment */}
    </section>
  );
}
