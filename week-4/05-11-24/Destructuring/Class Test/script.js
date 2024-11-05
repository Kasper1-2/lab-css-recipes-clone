const {platformName} = educationalPlatform;
console.log(platformName);

const {courses: {course002 : { difficulty: difficulty2 } } } = educationalPlatform;
console.log(difficulty2);

const {users: {user1001: { name, role, enrolledCourses } } } = educationalPlatform;
console.log(name, role, enrolledCourses);

