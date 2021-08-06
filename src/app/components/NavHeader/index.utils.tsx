export type Props = {
  route: {
    navigation: {
      openDrawer: () => void;
      navigate: (name: string, params: any) => void;
      canGoBack: () => boolean;
      goBack: () => void;
    };
  };
};
