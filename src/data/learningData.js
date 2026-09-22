const learningData = [
  {
    id: 1,
    name: "JavaScript",
    topics: [
      {
        id: 101,
        name: "JavaScript Fundamentals",
        concepts: [
          {
            id: 1001,
            name: "Variables",
            status: "mastered",
          },
          {
            id: 1002,
            name: "Functions",
            status: "understood",
          },
          {
            id: 1003,
            name: "Promises",
            status: "needs-practice",
          },
        ],
      },
      {
        id: 102,
        name: "Modern JavaScript",
        concepts: [
          {
            id: 1004,
            name: "Arrow Functions",
            status: "mastered",
          },
          {
            id: 1005,
            name: "Destructuring",
            status: "not-started",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "React",
    topics: [
      {
        id: 201,
        name: "React Fundamentals",
        concepts: [
          {
            id: 2001,
            name: "Components",
            status: "mastered",
          },
          {
            id: 2002,
            name: "Props",
            status: "mastered",
          },
          {
            id: 2003,
            name: "State",
            status: "understood",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "DSA",
    topics: [
      {
        id: 301,
        name: "Arrays",
        concepts: [
          {
            id: 3001,
            name: "Array Basics",
            status: "mastered",
          },
          {
            id: 3002,
            name: "Array Traversal",
            status: "mastered",
          },
        ],
      },
      {
        id: 302,
        name: "Searching",
        concepts: [
          {
            id: 3003,
            name: "Linear Search",
            status: "mastered",
          },
          {
            id: 3004,
            name: "Binary Search",
            status: "needs-revision",
          },
        ],
      },
      {
        id: 303,
        name: "Two Pointers",
        concepts: [
          {
            id: 3005,
            name: "Opposite Pointers",
            status: "mastered",
          },
          {
            id: 3006,
            name: "Target Sum",
            status: "understood",
          },
        ],
      },
      {
        id: 304,
        name: "Sliding Window",
        concepts: [
          {
            id: 3007,
            name: "Fixed Window",
            status: "needs revise",
          },
          {
            id: 3008,
            name: "Window Sum",
            status: "mastered",
          },
        ],
      },
      {
        id: 305,
        name: "HashMap",
        concepts: [
          {
            id: 3009,
            name: "HashMap Basics",
            status: "understood",
          },
          {
            id: 3010,
            name: "put() and get()",
            status: "understood",
          },
          {
            id: 3011,
            name: "getOrDefault()",
            status: "needs-practice",
          },
          {
            id: 3012,
            name: "Frequency Counting",
            status: "needs-practice",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Backend",
    topics: [
      {
        id: 401,
        name: "REST APIs",
        concepts: [
          {
            id: 4001,
            name: "HTTP Methods",
            status: "understood",
          },
          {
            id: 4002,
            name: "GET Request",
            status: "learning",
          },
          {
            id: 4003,
            name: "POST Request",
            status: "not-started",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "SQL",
    topics: [
      {
        id: 501,
        name: "SQL Fundamentals",
        concepts: [
          {
            id: 5001,
            name: "SELECT",
            status: "understood",
          },
          {
            id: 5002,
            name: "WHERE",
            status: "learning",
          },
          {
            id: 5003,
            name: "JOIN",
            status: "not-started",
          },
        ],
      },
    ],
  },
];

export default learningData;
