import Body from "../../components/Body";
import Card from "../../components/Common/Card";
import Layout from "../../components/Layout";
import RightSideNavbar from "../../components/RightSideNavbar";

const OrganizationProfile = () => {
  return (
    <div className="w-full h-full bg-[#F2EBE1] p-10">
      <Card>
        <Layout>
          <RightSideNavbar />
          <Body />
        </Layout>
      </Card>
    </div>
  );
};
export default OrganizationProfile;
