export type Props = {
  title: string;
  type: string;
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
