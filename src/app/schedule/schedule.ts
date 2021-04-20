import { GrapplingType } from "../grapplingtype/grapplingtype";

export interface Schedule{
  weekday: string;
  exercises: GrapplingType[];
  time: String[];
}
