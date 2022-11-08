import Button from "../Common/Button";
import Center from "../Common/Center";
import s from "../Uploads/Uploads.module.css";


const Apps = () => {
  return (
    <div>
      <Center className="h-28">
        <Button
          label="Create New Page"
          onClick={() => {
            alert("you just clicked this button");
          }}
        />
      </Center>
      <div className={s.uploadcontainer}>
        <h1 className={s.uploadtitle}>PAGES</h1>
        <ul className={s.list}>
          <li>American Video Hub</li>
          <li>Chines Press Hub</li>
          <li>Indian Press Page</li>
          <li>Product Image Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Apps;
