#MockImage FrontUI
##Referenced 
https://github.com/mounirhnf/react-starter-kit?ref=reactjsexample.com

##Run
```shell
yarn install
yarn start
```

##Colors
Check the color names list
https://matplotlib.org/2.1.1/gallery/color/named_colors.html

##Docker
docker build --build-arg PORT=3000 --build-arg REACT_APP_API_BASE_URL=https://img.mockimage.com/i/ --build-arg REACT_APP_PAYPALME_URL=https://paypal.me/sean6881 -t mockimage .
docker run -p 3000:80 -d mockimage