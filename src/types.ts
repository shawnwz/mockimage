export namespace Global {
  export type ScreenType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type ImageType = 'jpg' | 'png' | 'gif';
}

//------------------------------------------------------------------------------

export namespace Store {
  export interface State {
    readonly screenType: Global.ScreenType;
    readonly imageType: Global.ImageType;
    readonly imageWidth: number;
    readonly imageHeight: number;
    readonly bgColor: string;
    readonly textColor: string;
    readonly text: string;
    readonly textSize: number;
  }

  export interface Actions {
    readonly setScreenType: 'SET_SCREEN_TYPE';
    readonly setImageType: 'SET_IMAGE_TYPE';
    readonly setImageWidth: 'SET_IMAGE_WIDTH';
    readonly setImageHeight: 'SET_IMAGE_HEIGHT';
    readonly setBgColor: 'SET_BG_COLOR';
    readonly setTextColor: 'SET_TEXT_COLOR';
    readonly setText: 'SET_TEXT';
    readonly setTextSize: 'SET_TEXT_SIZE';
  }

  export type ActionType = Actions[keyof Actions];

  export interface Action<P = any> {
    readonly type: ActionType;
    readonly payload: P;
  }
}

//------------------------------------------------------------------------------

export namespace Utility {
  export type Clsx = (...c: (string | boolean | undefined | null)[]) => string;
  export type DetermineScreenType = (width: number) => Global.ScreenType;
}
