import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "HT Books",
  EMAIL: "contact@expertcoaching.vn",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Trang chủ",
  DESCRIPTION: "Không gian tĩnh lặng của con chữ, tư duy tri thức và lối sống tỉnh thức.",
};

export const BLOG: Metadata = {
  TITLE: "Bài viết",
  DESCRIPTION: "Nơi chia sẻ những góc nhìn sâu sắc về tâm lý học, chuyển hóa và tri thức nhân văn.",
};

export const WORK: Metadata = {
  TITLE: "Sự nghiệp",
  DESCRIPTION: "Hành trình xây dựng và đóng góp giá trị.",
};

export const PROJECTS: Metadata = {
  TITLE: "Dự án",
  DESCRIPTION: "Các dự án, tác phẩm và không gian sáng tạo đã và đang thực hiện.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/expertcoachingvn-lab"
  }
];
