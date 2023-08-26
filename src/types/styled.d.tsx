import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: string;
      secondaryText: string;
      primary: string;
      secondary: string;
      background: string;
      backgroundHeader: string;
      borderColor: string;
    };
  }
}
