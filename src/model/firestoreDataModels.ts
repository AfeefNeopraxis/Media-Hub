export type idAndName = {
  id: String;
  name: String;
};

export type userDataModel = {
  name?: string;
  email?: string;
  organizations?: idAndName[];
};
