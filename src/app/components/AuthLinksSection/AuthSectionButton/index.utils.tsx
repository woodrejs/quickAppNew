export type Props = {
  name: string;
  path: string;
  navigation: {
    navigate: (name: string) => void;
  };
};
