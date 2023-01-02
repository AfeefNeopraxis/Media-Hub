import { useContext, useRef } from "react";
import Body from "../../components/Body";
import Button from "../../components/Common/Button";
import Card from "../../components/Common/Card";
import Center from "../../components/Common/Center";
import InputText from "../../components/Common/FormInputs";
import Layout from "../../components/Layout";
import RightSideNavbar from "../../components/RightSideNavbar";
import { AppContext } from "../../helpers/context/appContext";

const OrganizationProfile = () => {
  const { user, createPage } = useContext(AppContext);

  const pageNameRef = useRef<HTMLInputElement>(null);

  // Prompt the user to create a page if there is no page available yet
  if (user?.organizations?.at(0)?.pages.length === 0)
    return (
      <Center fullScreen>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            createPage(pageNameRef.current!.value)
          }}
        >
          <InputText
            label="Page Name"
            inputRef={pageNameRef}
            required
          />
          <Center>
            <Button label="Save" />
          </Center>
        </form>
      </Center>
    )

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
