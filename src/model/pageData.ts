export type pageData = {
  name: String;
  description: String;
  files: String[];
  owner: String;
  editors: String[];
};

// Firestore data converter
export const pageConverter = {
  toFirestore: (page: pageData) => {
    return {
      name: page.name,
      description: page.description,
      files: page.files,
      owner: page.owner,
      editors: page.editors,
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    const page: pageData = {
      name: data.name,
      description: data.description,
      files: data.files,
      owner: data.owner,
      editors: data.editors,
    };
    return page;
  },
};
