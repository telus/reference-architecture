# Image Optimization

## Why

To provide an optimal experience for our customers, along with optimizing our SEO rankings, it's important that we deliver images in an efficient and optimized manner. By being proactive and conscious of the images that we embed in our application, along with utilizing modern browser features, we can deliver a fast, responsive and functional experiences to all our customers, regardless of their device size or type.

## What

Due to the nature of some of our products, our pages can often have a high number of visual elements on a page. The downside is that every asset has a cost, from the time to make the HTTP request to our CDN, to the users connection speed and even to their own cellular data cap.

As a result, it becomes important that we do our best to provide our users with the most optimized experience possible. For some of our experiences, the greatest performance and efficiency gains are in optimizing how and what images we are serving to our users.

## How

For optimizing images, there are a few tactics that we can utilize to improve the experience for our users.

SVGs tend to be the ideal format if possible. SVGs should tend to be the smallest filesize between image formats. Due to their vector format, they also can scale from very small to very large from the same resource, which makes maintaining a page simpler. Iconography tends to be the ideal use case for an SVG versus other image formats.

Picking the correct image type for the use case in the page. When including an image asset, you should evaluate what kind of image it is and what format might best serve it. If it is a colourful lifestyle image, and transparency isn't needed, a JPG is probably a good choice. If it is a small asset with few colours, PNG or SVG if possible would be the ideal choice. Transparent images somewhat force our hand and require us to use PNGs, but it could be worth having a conversation to see if a large colourful asset with transparency could be avoided.

It's also important that we serve images that fit the use case. When using content managed images in our legacy stack, we often used 1 oversized asset and scaled it down to the various use cases. While there are some benefits to this approach, it generally worsens the experience for the customer as they are forced to load an asset at a size thet they may never encounter. One should also endevour to use appropriate measures to ensure the smallest image required is loaded. For inline images, this means utilizing the srcset attribute. For background images, this means media queries.

Finally (and this might be irrelevant for Contentful) is to ensure that we are optimizing our assets. Using the output from Sketch or other tools are likely to be bloated and excessively large. Tools like `convert`, a part of ImageMagick are effective tools to optimize image assets.

## References

- [Google PageSpeed Insights reference on Images](https://developers.google.com/speed/docs/insights/OptimizeImages)
