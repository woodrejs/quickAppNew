export type Props = {
  primaryButton: string[];
  secoundaryButton?: string[];
  navigation: {
    navigate: (name: string) => void;
  };
};
