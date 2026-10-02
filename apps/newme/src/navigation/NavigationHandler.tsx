import { NavigationHandler } from "@newme/shared-sdk";

export const navigationHandler: NavigationHandler = {
  navigate: (routeName: string) => {
    console.log('Navigating to route:', routeName);
  },

  goBack: () => {
    console.log('Going back');
  },
};