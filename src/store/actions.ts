import {Global, Store} from 'types';

//------------------------------------------------------------------------------

export const actions: Store.Actions = {
  setScreenType: 'SET_SCREEN_TYPE',
  setImageType: 'SET_IMAGE_TYPE',
  setImageWidth: 'SET_IMAGE_WIDTH',
  setImageHeight: 'SET_IMAGE_HEIGHT'
};

//------------------------------------------------------------------------------

interface ScreenTypePayload {
  readonly screenType: Global.ScreenType;
}

interface ScreenTypeAction extends Store.Action<ScreenTypePayload> {};

export function setScreenType(screenType: Global.ScreenType): ScreenTypeAction {
  return {
    type: actions.setScreenType,
    payload: {
      screenType,
    },
  };
}

//---------------set image type---------------
interface ImageTypePayload {
  readonly imageType: Global.ImageType;
}

interface ImageTypeAction extends Store.Action<ImageTypePayload> {};

export function setImageType(imageType: Global.ImageType): ImageTypeAction {
  return {
    type: actions.setImageType,
    payload: {
      imageType,
    }
  }
}

//------------set width---------------
interface ImageWidthPayload {
  readonly imageWidth: number;
}
interface ImageWidthAction extends Store.Action<ImageWidthPayload> {};
export function setImageWidth(imageWidth: number): ImageWidthAction {
  return {
    type: actions.setImageWidth,
    payload: {imageWidth}
  }
}

//------------set height---------------
interface ImageHeightPayload {
  readonly imageHeight: number;
}
interface ImageHeightAction extends Store.Action<ImageHeightPayload> {};
export function setImageHeight(imageHeight: number): ImageHeightAction {
  return {
    type: actions.setImageHeight,
    payload: {imageHeight}
  }
}
