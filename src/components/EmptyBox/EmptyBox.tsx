import Center from "../Common/Center";
import Button from "../Common/Button";

const EmptyBox = () => {
  return (
    <Center>
      <div>
        <img src="images/cube.png" alt="empty cube" />
        <p>
          Start by adding media assets
          <br /> Click <b>Upload assets</b> to upload your data
        </p>
        <Button label="Upload assets" />
      </div>
    </Center>
  );
};

export default EmptyBox;
