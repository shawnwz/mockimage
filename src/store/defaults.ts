import {Store} from 'types';

import determineScreenType from 'utility/determine-screen-type';

//------------------------------------------------------------------------------

const defaults: Store.State = {
  screenType: determineScreenType(window.innerWidth),
  imageType: 'jpg',
  imageWidth: 200,
  imageHeight: 200,
  bgColor: 'grey',
  textColor: 'black',
  text: 'MockImage',
  textSize: 20
};

//------------------------------------------------------------------------------

export default defaults;