import Banner from "../../components/Banner/Banner";
import CareerGoal from "../../components/CareerGoal/CareerGoal";
import FreeCourses from "../../components/FreeCourses/FreeCourses";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import LiveCourseContents from "../../components/LiveCourseContents/LiveCourseContents";
import OstadForBusiness from "../../components/OstadForBusinessCard/OstadForBusiness";
import WatchFreeWebinar from "../../components/WatchFreeWebinar/WatchFreeWebinar";
import AllCourses from "../../components/AllCourses/AllCourses";

const Home = () => {
  return <div className="bg-[#F9F9FA]">
    <Banner />
    <AllCourses/>
    <WatchFreeWebinar/>
    <CareerGoal/>
    <LiveCourseContents />
    <OstadForBusiness />
    <LearnerReviews/>
    <FreeCourses />
  </div>;
};

export default Home;
