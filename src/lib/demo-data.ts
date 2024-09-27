export const demoProfile = {
  name: "Katharine McPhee Foster",
  username: "katharinefoster",
  profileImage: "/demo-avatars/1.jpeg",
  followers: null, // 67300,
  followings: null, // 1701,
};

type Account = {
  username: string;
  name: string;
  verified: boolean;
  avatarUrl: string;
  followers: number;
  addedDate: string;
};

export const demoTargets: Account[] = [
  {
    name: "BRONXANDBANCO",
    username: "bronxandbanco",
    verified: true,
    followers: 475000,
    avatarUrl: "/demo-avatars/2.jpeg",
    addedDate: "2 hours ago",
  },
  {
    username: "ruggable",
    name: "Machine Washable Rugs",
    verified: true,
    followers: 1.4 * 1e6,
    avatarUrl: "/demo-avatars/3.jpeg",
    addedDate: "5 days ago",
  },
  {
    username: "khaite_ny",
    name: "khaite_ny",
    verified: true,
    followers: 720000,
    avatarUrl: "/demo-avatars/4.jpeg",
    addedDate: "a month ago",
  },
];

export const whitelistedTargets: Account[] = [
  {
    username: "larlarlee",
    name: "Laura Lee",
    verified: true,
    followers: 1.7 * 1e6,
    avatarUrl: "/demo-avatars/5.jpeg",
    addedDate: "a month ago",
  },
  {
    username: "macduggal",
    name: "Mac Duggal",
    verified: true,
    followers: 283000,
    avatarUrl: "/demo-avatars/6.jpeg",
    addedDate: "a month ago",
  },
  {
    username: "bagatellecourchevel",
    name: "BAGATELLE COURCHEVEL",
    verified: true,
    followers: 79300,
    avatarUrl: "/demo-avatars/7.jpeg",
    addedDate: "a month ago",
  },
];

export const blacklistedTargets: Account[] = [
  {
    username: "jopeku123",
    name: "jopeku123",
    verified: false,
    followers: 39,
    avatarUrl: "/demo-avatars/8.jpeg",
    addedDate: "7 days ago",
  },
  {
    username: "g.w7q",
    name: "y",
    verified: false,
    followers: 459,
    avatarUrl: "/demo-avatars/9.jpeg",
    addedDate: "9 days ago",
  },
];
