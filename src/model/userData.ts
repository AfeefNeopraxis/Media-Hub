import { idName } from "./idAndName";

export type userData = {
  name: String;
  email: String;
  organizations?: {
    id: String;
    name: String;
    pages?: idName[];
  }[];
};

// Firestore data converter
export const userConverter = {
  toFirestore: (user: userData) => {
    return {
      name: user.name,
      email: user.email,
      organizations: user.organizations,
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    const user: userData = {
      name: data.name,
      email: data.email,
      organizations: data.organizations,
    };
    return user;
  },
};
