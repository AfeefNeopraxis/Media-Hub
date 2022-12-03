import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../helpers/firebase_utils";
import Button from "../Common/Button";
import Center from "../Common/Center";
import s from "./Navigation.module.css";

const Navigation = () => {
  const [signOut, loading, error] = useSignOut(auth);

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading from Navigation...</p>;
  return (
    <div>
      <Center className="h-28">
        <Button label="Create New Page" onClick={() => {}} />
      </Center>
      <div className={s.container}>
        <h1 className={s.title}>PAGES</h1>
        <ul className={s.list}>
          <li>American Video Hub</li>
          <li>Chines Press Hub</li>
          <li>Indian Press Page</li>
          <li>Product Image Gallery</li>
        </ul>
      </div>
      <Center className="h-28">
        <Button
          label="Logout"
          onClick={async () => {
            const success = await signOut();
          }}
        />
      </Center>
    </div>
  );
};

export default Navigation;
