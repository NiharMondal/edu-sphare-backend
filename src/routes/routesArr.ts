import { authRoute } from "../modules/auth/auth.route";
import { courseRoute } from "../modules/course/course.routes";
import { lectureRoute } from "../modules/lecture/lecture.routes";
import { moduleRoute } from "../modules/module/module.routes";

export const routesArray = [
	{ path: "/auth", route: authRoute },
	{ path: "/courses", route: courseRoute },
	{ path: "/modules", route: moduleRoute },
	{ path: "/lectures", route: lectureRoute },
];
