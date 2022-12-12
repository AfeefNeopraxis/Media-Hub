import { DocumentData } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import Body from "../../components/Body";
import Button from "../../components/Common/Button";
import Card from "../../components/Common/Card";
import Center from "../../components/Common/Center";
import InputText from "../../components/Common/FormInputs";
import Layout from "../../components/Layout";
import RightSideNavbar from "../../components/RightSideNavbar";
import { getUserData, saveUserData } from "../../helpers/firestore_utils";

const OrganizationProfile = () => {

  const organizationNameRef = useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<DocumentData | undefined>();

  const fetchData = useCallback(async () => {
    const userData = await getUserData();
    setUserData(userData);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (!userData) {
    return (
      <Center className="h-screen">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            await saveUserData(organizationNameRef.current?.value);
            fetchData();
          }}
        >
          <InputText
            label="Oranization Name"
            inputRef={organizationNameRef}
            required
          />
          <Center>
            <Button label="Save" />
          </Center>
        </form>
      </Center>
    );
  }

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
