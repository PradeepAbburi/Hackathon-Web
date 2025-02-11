export type ThemeType = 'light' | 'dark';

export interface RegistrationFormData {
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  branch: Branch;
  residenceType: 'dayscholar' | 'hosteler';
  team: string;
  college : string;
  experience: string;
  projectIdea: string;
}

export type Branch = 'CSM' | 'CAI' | 'AID' | 'CSD' | 'CSC';