export interface NavMenuItemsType {
  name: string;
  url: string;
}

export interface AutomatedImagesDataType {
  id: number;
  url: string | undefined;
}

export interface HowItWorksImagesDataType {
  id: number;
  url: string | undefined;
  info: string;
}

export interface HandPickedDataType {
  id: number;
  destination: string;
  duration: number;
  additionalInfo: string;
}

export interface PlanDataType {
  destination: string;
  duration: string;
  additionalInfo: string;
}
export interface GlobalActionType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
  type: string;
}
export interface PlanSliceStateType {
  itineraryData: string;
  itineraryDestination: string;
  itineraryDuration: string;
}

export interface RootState {
  plan: {
    itineraryData: string;
    itineraryDestination: string;
    itineraryDuration: string;
  };
}
