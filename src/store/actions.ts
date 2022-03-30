import {Global, Store} from 'types';

//------------------------------------------------------------------------------

export const actions: Store.Actions = {
  setScreenType: 'SET_SCREEN_TYPE',
  setImageType: 'SET_IMAGE_TYPE',
  setImageWidth: 'SET_IMAGE_WIDTH',
  setImageHeight: 'SET_IMAGE_HEIGHT',
  setBgColor: 'SET_BG_COLOR',
  setTextColor: 'SET_TEXT_COLOR',
  setText: 'SET_TEXT',
  setTextSize: 'SET_TEXT_SIZE'
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

//------------set bg color--------------
interface BgColorPayload {
  readonly bgColor: string
}
interface BgColorAction extends Store.Action<BgColorPayload> {};
export function setBgColor(bgColor: string): BgColorAction {
  return {
    type: actions.setBgColor,
    payload: {bgColor}
  }
}

//------------set text color--------------
interface TextColorPayload {
  readonly textColor: string
}
interface TextColorAction extends Store.Action<TextColorPayload> {};
export function setTextColor(textColor: string): TextColorAction {
  return {
    type: actions.setTextColor,
    payload: {textColor}
  }
}

//------------set text--------------
interface TextPayload {
  readonly text: string
}
interface TextAction extends Store.Action<TextPayload> {};
export function setText(text: string): TextAction {
  return {
    type: actions.setText,
    payload: {text}
  }
}

//------------set text size--------------
interface TextSizePayload {
  readonly textSize: number
}
interface TextSizeAction extends Store.Action<TextSizePayload> {};
export function setTextSize(textSize: number): TextSizeAction {
  return {
    type: actions.setTextSize,
    payload: {textSize}
  }
}