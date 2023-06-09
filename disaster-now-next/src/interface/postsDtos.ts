export interface ITags {
  tagId: number;
  tagName: string;
  create_date: string;
  location_id: string;
  location_name: string;
  md101_sn: string;
  msg: string;
  send_platform: string;
}

export interface IGallery {
  postId: number;
  title?: string;
  content?: string;
  img?: string;
  createdAt: string;
}
