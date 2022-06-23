import AboutSection from "./AboutSection";
import pic01 from "../resources/images/pic01.jpg";
import pic02 from "../resources/images/pic02.jpg";
import pic03 from "../resources/images/pic03.jpg";
import pic04 from "../resources/images/pic04.jpg";
import pic05 from "../resources/images/pic05.jpg";
import pic06 from "../resources/images/pic06.jpg";

export default function Aboutus() {
  return (
    <div id="AboutUs" className="overflowX-hidden">
      <div className="row">
        <div className="row">
          <h1 className="display-1 fw-bolder text-center">Our Mission</h1>
        </div>
        <hr className="w-5 mx-auto bg-danger border-danger my-4" />
        <div className="row">
          <h3 className="text-center w-50 fs-2 mx-auto my-4">
            We are passionate about finding new ways to provide the community
            the tools and resources they need to share their books and to grow.
            Our work is never done.
          </h3>
        </div>
      </div>
      <AboutSection
        title="Born from creativity. Shaped by our values."
        text="We are a company built on the things we believe in — impact, trust, care, simplicity, and a healthy dose of hard work. These values guide who we are and how we work."
        image={pic01}
        rightalign={false}
      />
      <AboutSection
        title="Impact is everything."
        text="The ability to make an impact drives us forward each and every day. Whether it’s for our members, company, team, or culture — we strive to make an impact with ideas that are better, smarter, and more innovative."
        image={pic02}
        rightalign={true}
      />
      <AboutSection
        title="Trust leads to trust."
        text="Trust is contagious. That’s why we bring our true selves to work every day and take accountability for our actions. It leads to better work and a better work experience. We trust ourselves and our team to do what’s right."
        image={pic03}
        rightalign={false}
      />
      <AboutSection
        title="One team, one goal."
        text="No matter which department, title, or role you have at Format, we all are unified by the same goal: educating and helping the individual by donating the books. While each of us has a different responsibility in that process, it all comes back to that shared purpose"
        image={pic04}
        rightalign={true}
      />
      <AboutSection
        title="We care."
        text="When you love what you do, you care about the people around you. Kindness, empathy, and respect are a part of our everyday culture and actions. This commitment to caring impacts everything we touch and leads to taking better care of our community."
        image={pic05}
        rightalign={false}
      />
      <AboutSection
        title="Simple is always better."
        text="We are a team of naturally curious problem solvers. Our years of experience have taught us that the best solutions are the simplest solutions. Reducing complexity, building intuitive experiences, and concise communication drive our mission of creating more with less."
        image={pic06}
        rightalign={true}
      />
    </div>
  );
}
