export type OnclickProp = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export interface currentGroupMembersI {
  _id: string;
  status: string;
  fullName: string;
  emailAddress: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GroupinitialStateI {
  currentGroup: object;
  currentUser: object;
  currentGroupMembers: currentGroupMembersI[];
  loadingStatus: string;
}

export interface JoinGroupI {
  groupId: string;
  userId: string;
}

export interface AuthinitialStateI {
  user: object;
  isAdmin: boolean;
  loadingStatus: string;
}
