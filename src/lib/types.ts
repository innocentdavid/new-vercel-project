export type UserProfile = {
  name: string;
  username: string;
  profileImage: string;
  followers: number | null;
  followings: number | null;
  posts: number | null;
  biography: string;
};


const userContentSample = {
  id: 13,
  created_at: "2024-06-28T13:56:14.924203+00:00",
  username: "dev_cent",
  thumbnail_url:
    "https://phosphor.ivanenko.workers.dev/?url=https%3A//scontent-mad1-1.cdninstagram.com/v/t51.2885-15/363516225_210356178320733_9104622604820595023_n.jpg%3Fstp%3Ddst-jpg_e15_p360x360%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4zOTB4NjkzLnNkci5mMzYzMjkifQ%26_nc_ht%3Dscontent-mad1-1.cdninstagram.com%26_nc_cat%3D109%26_nc_ohc%3D7BUoz3YXJ88Q7kNvgFTB0XA%26edm%3DAJgCAUABAAAA%26ccb%3D7-5%26ig_cache_key%3DMzE1Nzg1NDE5NTM5OTYwOTYzMw%253D%253D.2-ccb7-5%26oh%3D00_AYA4RcodyyqEuz73xeqQtsR9md8WEsRnCbWePuXCuAr9iw%26oe%3D66849C31%26_nc_sid%3Df93d1f",
  video_url:
    "https://phosphor.ivanenko.workers.dev/?url=https%3A//scontent.cdninstagram.com/o1/v/t16/f1/m82/BB4CA65EFD2552777EB719B752707D94_video_dashinit.mp4%3Fefg%3DeyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D108%26vs%3Dcd81ba8d6391a44%26_nc_vs%3DHBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CQjRDQTY1RUZEMjU1Mjc3N0VCNzE5Qjc1MjcwN0Q5NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHTnN0UldiTXVFLXRTOENBSzk4bmhmaThhNTVicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJrjG1%252FG%252B8JkFFQIoAkMzLBdAMhDlYEGJNxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%252FgcA%26ccb%3D9-4%26oh%3D00_AYCF6xRFDut9o8ZGebYrAR3_gJJ8I-P9T9n5SmMZz5kJBg%26oe%3D66808851%26_nc_sid%3D1d576d",
  comment_count: 0,
  like_count: 0,
  share_count: 0,
  play_count: 10,
  caption: {},
  engagement_rate: null,
};

export type UserContent = typeof userContentSample[]