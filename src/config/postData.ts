import { avatarURL } from "./avatarData";

export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: avatarURL.frogTwo,
      name: "User Name",
      role: "Software Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Cupiditate, hic nobis quibusdam magni! 👋",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni reprehenderit natus labore in at consequatur! Cupiditate, hic nobis quibusdam magni dignissimos unde laudantium dicta corrupti laborum numquam, iste exercitationem 🚀",
      },
      { type: "link", content: "https://github.com/JhoN-yo" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: avatarURL.frogThree,
      name: "User Name",
      role: "Content Creator",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni reprehenderit natus labore in at consequatur! Cupiditate, hic nobis quibusdam",
      },
      {
        type: "paragraph",
        content:
          "Quod magni reprehenderit natus labore in at consequatur! Cupiditate, hic nobis quibusdam 🚀",
      },
      { type: "link", content: "https://github.com/JhoN-yo" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];
