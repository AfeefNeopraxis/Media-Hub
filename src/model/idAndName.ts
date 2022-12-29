export type idName = {
  id: string;
  name: string;
};

const IdNameConverter = {
  toFirestore: (idName: idName) => {
    return {
      id: idName.id,
      name: idName.name,
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    const IdName: idName = {
      id: data.id,
      name: data.name,
    };
    return IdName;
  },
};
