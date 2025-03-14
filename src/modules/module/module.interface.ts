import { Types } from "mongoose";

export interface IModule {
	title: string;
	slug: string;
	index: number; // auto-incremented
	course: Types.ObjectId;
	lectures: Types.ObjectId;
	isDeleted: boolean;
}
