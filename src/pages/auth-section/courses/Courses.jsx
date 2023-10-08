export const Courses = [
  {
    title: "Intro to Python",
    description: "Learn Python from scratch",
    createdBy: "UserID_1",
    courseType: "mixed",
    modules: [
      {
        title: "Getting Started",
        index: 0,
        type: "video",
        contents: [
          {
            title: "What is Python?",
            index: 0,
            type: "video",
            content: "some_video_url",
            exerciseInfo: null,
          },
          {
            title: "Installing Python",
            index: 1,
            type: "video",
            content: "another_video_url",
            exerciseInfo: null,
          },
        ],
      },
      {
        title: "Variables",
        index: 1,
        type: "text",
        contents: [
          {
            title: "Understanding Variables",
            index: 0,
            type: "text",
            content: "Text content about variables",
            exerciseInfo: null,
          },
          {
            title: "Variable Exercise",
            index: 1,
            type: "exercise",
            content: null,
            exerciseInfo: "Solve these problems to understand variables better",
          },
        ],
      },
    ],
  },
  // ... more courses
];
