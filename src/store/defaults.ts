import {Store} from 'types';

import determineScreenType from 'utility/determine-screen-type';

//------------------------------------------------------------------------------

const defaults: Store.State = {
  screenType: determineScreenType(window.innerWidth),
  imageType: 'jpg',
  imageWidth: 100,
  imageHeight: 100,
  bgColor: 'grey',
  textColor: 'black',
  text: 'MockImage',
  textSize: 15
};

//------------------------------------------------------------------------------

export default defaults;