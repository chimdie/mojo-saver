export type OnclickProp = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

export interface initialStateI {
  currentGroup: object;
  currentUser: object;
  currentGroupMembers: currentGroupMembersI[];
  loadingStatus: string;
}

export interface JoinGroupI {
  groupId: string;
  userId: string;
}
