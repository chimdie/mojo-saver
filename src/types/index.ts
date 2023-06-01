export type OnclickProp = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type currentGroupMembersI = {
  _id: string;
  status: string;
  fullName: string;
  emailAddress: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};

export type GroupinitialStateI = {
  currentGroup: object;
  currentUser: object;
  currentGroupMembers: currentGroupMembersI[];
  loadingStatus: string;
};

export type JoinGroupI = {
  groupId: string;
  userId: string;
};

export type AuthinitialStateI = {
  user: object;
  isAdmin: boolean;
  loadingStatus: string;
};

export type UserCardI = {
  _id: string;
  status: string;
  fullName: string;
  emailAddress: string;
};
