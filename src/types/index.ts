export type Accountant = {
    cell: string;
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: { thumbnail: string; medium: string };
    login: {
      uuid: string;
    };
  };

