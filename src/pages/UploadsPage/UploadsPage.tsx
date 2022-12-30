import SmartImage from "../../components/SmartImage/SmartImage";

const uploadData: Array<{
  sectionName: string;
  contents: {
    imageSrc: string;
    title: string;
  }[];
}> = [
    {
      sectionName: "User Uploads",
      contents: [
        {
          imageSrc:
            "https://images.unsplash.com/photo-1670777361177-7ea502ee059d",
          title: "Learn",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1660727803635-1fbff87eaf50",
          title: "This is not",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1670747375356-6efaa71ec623",
          title: "Uploaded by me",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1670784124861-0e8d1ef1fab7",
          title: "Soooryaj",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1666214275172-ccc3b98e5519",
          title: "Annoyn",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1670787053502-ad4b741ef37a",
          title: "More comming",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1670795635018-d774a2b9e07d",
          title: "Soooryaj",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1650361128424-00e941139e5d",
          title: "Annoyn",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1661956602868-6ae368943878",
          title: "More comming",
        },
      ],
    },
    {
      sectionName: "Bussiness Uploads",
      contents: [
        {
          imageSrc:
            "https://images.unsplash.com/photo-1663490651503-160895b5fa3b",
          title: "Learn",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1669135021161-ada3732f65f4",
          title: "This is not",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1669135021167-da873b6d73ab",
          title: "Uploaded by me",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1668253809615-cff40cd3cb1d",
          title: "Soooryaj",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1669463597861-cf714822c204",
          title: "Annoyn",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1670624371777-d902868995d7",
          title: "More comming",
        },
      ],
    },
  ];

const UploadsPage = () => {
  return (
    <div>
      <ToggleButton />
      {uploadData.map((ud) => UploadSection(ud))}
    </div>
  );
};

export default UploadsPage;

const ToggleButton = () => {
  return (
    <div className="flex justify-end mb-2 mt-2 ml-2 mr-2">
      <p className="font-bold text-xs my-1 justify-center pr-1">merge view</p>
      <label className="relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
      </label>
    </div>
  );
};

const UploadSection = ({
  sectionName,
  contents,
}: {
  sectionName: string;
  contents: { imageSrc: string; title: string }[];
}) => {
  return (
    <div className="container mx-auto px-2 text-center">
      <p className="font-bold py-1 text-xs">{sectionName}</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {contents.map((image) => ImageTile(image))}
      </div>
    </div>
  );
};

const ImageTile = ({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) => {
  return (
    <div>
      <SmartImage src={imageSrc} alt={title} />
      <p className=" text-sm">sample description of image</p>
    </div>
  );
};
