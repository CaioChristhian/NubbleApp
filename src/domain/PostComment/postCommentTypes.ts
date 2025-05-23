export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  createdAtRelative: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 115;
  message: string; //'Cruciamentum ciminatio abutor.';
  user_id: number; //8;
  post_id: number; //1;
  created_at: string; //'2024-08-01T22:23:21.000-03:00';
  updated_at: string; //'2024-08-02T09:15:07.301-03:00';
  user: {
    id: number; //8;
    first_name: string; //'Gabriel';
    last_name: string; //'Lemos';
    username: string; //'glemos';
    email: string; //'glemos@coffstack.com';
    profile_url: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/3-gabriel.png';
    is_online: boolean; //false;
    full_name: string; //'Gabriel Lemos';
  };
  meta: {};
}
