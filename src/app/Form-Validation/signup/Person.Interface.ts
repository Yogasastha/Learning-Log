export interface Person {
  fullName: string;
  gender: string;
  email: string;
  phNumber: number | null;
  specialization: string;
  experience: number | null;
  bio: string;
}

export interface Users {
  person: Person[];
}