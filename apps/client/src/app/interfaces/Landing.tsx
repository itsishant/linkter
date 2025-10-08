interface ILanding {
  title: string;
  des1: string;
  des2: string;
}

interface ILandingContent {
  heading: string;
  subHeading: string;
  button1: string;
  button2: string;
  video: string;
}

export interface IData {
  landing: ILanding;
}

export interface ILandingContentData {
  landingContent: ILandingContent;
}
