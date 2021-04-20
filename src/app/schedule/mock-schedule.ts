import { GRAPPLINGTYPE } from '../grapplingtype/mock-grapplingtype';
import { Schedule } from "./schedule";


export const SCHEDULE: Schedule[] = [
  { weekday: "MÅNDAG", exercises: [GRAPPLINGTYPE[0]], time: ["12:00 - 13:00"]},
  { weekday: "TISDAG", exercises: [GRAPPLINGTYPE[2]], time: ["17:30 - 19:15"]},
  { weekday: "ONSDAG", exercises: [GRAPPLINGTYPE[2], GRAPPLINGTYPE[0], GRAPPLINGTYPE[3]], time: ["12.00 - 13:00", "17:30 - 19:00", "19:00 - 20:15"]},
  { weekday: "TORSDAG", exercises: [GRAPPLINGTYPE[4], GRAPPLINGTYPE[2]], time: ["17:15 - 18:00", "18:00 - 19:30"]},
  { weekday: "FREDAG", exercises: [GRAPPLINGTYPE[2], GRAPPLINGTYPE[5]], time: ["12:00 - 13:00", "16:00 ->"]},
  { weekday: "LÖRDAG", exercises: [GRAPPLINGTYPE[6]], time: ["11:00 - 13:00"]},
  { weekday: "LÖRDAG", exercises: [GRAPPLINGTYPE[7], GRAPPLINGTYPE[4], GRAPPLINGTYPE[2], GRAPPLINGTYPE[0]], time: ["10:45 - 11:30", "15:00 - 15:45", "16:00 - 17:30", "17:30 - 19:00"]},
];
