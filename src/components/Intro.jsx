import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.webp";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Shop Smart with <span className="blue">Your Budget</span>
        </h1>
        <p>
          Plan your purchases and stick to your budget. Buy only what you
          intended without overspending.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Enter your name"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Get Started</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Budget planning illustration" width={600} />
    </div>
  );
};

export default Intro;
