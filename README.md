# [React Artwork](https://github.com/guzgarcia/react-artwork)
Show your photos or any artworks on a cool (and draggable) way.

<p align="center">
  <img src="http://i.imgur.com/WMIeedi.gif" />
</p>

## Online demo

You can see the component working [here](https://guzgarcia.github.io/react-artwork/).

## Install

`npm install react-artwork`

## How it works

This is not a carousel component, we have already a [excellent carousel](https://github.com/akiran/react-slick) written in React. 
This component have as purpose show a small gallery of artworks in a very simple way. 

## API

The API is very simple, a tiny bunch of options are available.

- `height` (`number`): height of portrait. No default value. If you do not set it, 
you'll get an error.
- `width` (`number`): no description needed. No default value. If you do not set it, 
you'll get an error.
- `transitionDuration` (`string`): the duration of the transition (push) between screens.
Default value is `1s`.
- `radius` (`number`): border radius of the component. Default value is `0`.
- `draggable` (`boolean`): add or not draggable behaviour to the component. Default value
is `0`.
- `source` (`string`): the directory that contains the images and the `data.json` 
(more later). No default value.
- `containment`: limits the component to the limits of the father. That is to say, it can not be dragged beyond the parent. Default value is `false`.
- `inline` (`boolean`): indicates that the images need to be passed as an array.
 Default value is `false`.
- `images` (`array`): it only should be used if `inline` option is set to true. 
Default value is `[]`. This option 
accepts an array with the image's data. For example:
    ```javascript
    images={[
      {
        title: "The tree mussicians", 
        name: "https://imgur.com/nf29f"
      }
    ]}
    ```
    
- `shadow` (`boolean`): apply shadow around the component.
- `theme` (`object`): the **module** css file for theming .

**NOTE:** when using the property `containment` the father will be the element with relative position closest to the element.

## Examples

```javascript
<Artwork
  height={450}
  width={400}
  radius={5}
  transitionDuration=".8s",
  draggable={true}
  containtment={true}
  source="albums"
  shadow={true}
/>
```

In this example, the images are saved inside the `albums` folder. This folder 
should have a `data.json` with the following information:

```javascript
[
  {
    "title": "title of the image to display in the header",
    "name": "name of the image (not the url)"
  }
]
```

the images will be displayed in the same order in which they were listed in the file `data.json`.

---

In this example the images are passed as an array and the drag is disabled.

```javascript
const images = [
  {
    title: "The three mussicians",
    name: "http://imgur.com/sf9ld4"
  },
  ...
];

<Artwork
  height={450}
  width={400}
  radius={5}
  transitionDuration=".8s",
  draggable={false}
  inline={true}
  images={images}
/>
```

## Theming

This component is styled with [CSS modules](https://github.com/css-modules/css-modules). For theming, you can 
wrote your styles in any preprocessor, but, you need to generate a 
CSS module with your task tool. We recommend webpack. For example using PostCSS:

```javascript
{
  test: /\.css?$/,
  loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss')
}
```

Then you can pass the import theme to the component:

```javascript
import customTheme from 'styles/custom-theme.css';

<Artwork
  ...
  theme={customTheme}
/>
```

## List of tasks

- [x] Make the component draggable.
- [x] Enable shadows.
- [x] Consume images from folder or pass them as an array.
- [x] Customize animation's duration.
- [ ] Customize animation's timmig function.
- [ ] Implements tests with Enzyme and Jest/?.

## Contribute

If you wanna contribute to this repo, you're welcome.
