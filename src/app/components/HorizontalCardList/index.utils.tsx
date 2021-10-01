export type Props = {
  title: string;
  variant: string;
  navigation: {
    navigate: () => void;
  };
  data: [
    {
      id: number;
      img: string;
    }
  ];
};
