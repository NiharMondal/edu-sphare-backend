import { Types } from "mongoose";

// type TAttachment = {
// 	url: string;
// 	fileType: "video" | "text" | "pdf";
// };
export interface ILecture {
	title: string;
	slug: string;
	content: string;
	type: string;
	duration: number;
	module: Types.ObjectId;
	// attachments: TAttachment[];
	isDeleted: boolean;
}
