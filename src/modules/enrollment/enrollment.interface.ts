import { Types } from "mongoose";

export interface IEnrollment {
	student: Types.ObjectId;
	course: Types.ObjectId;
	progress: number;
	enrolledAt: Date;
}
