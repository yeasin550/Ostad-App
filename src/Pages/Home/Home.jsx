import CareerGoal from "../../components/CareerGoal/CareerGoal";
import FreeCourses from "../../components/FreeCourses/FreeCourses";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import LiveCourseContents from "../../components/LiveCourseContents/LiveCourseContents";

const Home = () => {
  return <div className="bg-[#F9F9FA]">
    <CareerGoal/>
    <LiveCourseContents />
    <FreeCourses />
    <LearnerReviews/>
  </div>;
};

export default Home;
