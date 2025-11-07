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

interface ILandingWorks {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string
}

export interface IData {
  landing: ILanding;
}

export interface ILandingFooter {
  text: string;
}

export interface ILandingContentData {
  landingContent: ILandingContent;
  landingWorks: ILandingWorks;
  landingFooter: ILandingFooter;
}
