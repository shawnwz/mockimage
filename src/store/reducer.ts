import {Store} from 'types';

import defaults from 'store/defaults';
import {actions} from 'store/actions';

//------------------------------------------------------------------------------

export default function reducer(
  state: Store.State = defaults,
  {type, payload}: Store.Action<Store.State>,
) {
  switch (type) {
    case actions.setScreenType:
      return {
        ...state,
        screenType: payload.screenType,
      };
    case actions.setImageType:
      console.log('set image type reducer...')
      return {...state, imageType: payload.imageType}
    case actions.setImageWidth:
      return {...state, imageWidth: payload.imageWidth}
    case actions.setImageHeight:
      return {...state, imageHeight: payload.imageHeight}
    default:
      return state;
  }
}
