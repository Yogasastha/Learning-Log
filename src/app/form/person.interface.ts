export interface Person {
  fullName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  specialization: string;
  experience: number;
  bio: string;
}

export interface User {
  users: Person[];
}
