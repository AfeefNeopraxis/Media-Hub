import { idName } from "./idAndName";

export type userData = {
  name: string;
  email: string;
  organizations?: {
    id: string;
    name: string;
    pages: idName[];
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
