# react-native-chillest-monkey

[![npm version](https://badge.fury.io/js/react-native-chillest-monkey.svg)](https://badge.fury.io/js/react-native-chillest-monkey)

Embed the [chillest monkey][1] into your React Native application at any
point at which your users need to recalibrate their scale of chill to
absolute maximum.

![Chillest Monkey](http://g.recordit.co/oQZwFqglic.gif)


## Installation

Add the chillest monkey package to your react native project:


```
$ yarn add react-native-chillest-monkey
$ yarn install
```

## Usage

You can now render the chillest monkey anywhere inside your react native
application:

``` jsx

import ChillestMonkey from 'react-native-chillest-monkey';

export default class App extends Component {
  render() {
    return (
      <ChillestMonkey style={Styles.monkey}/>
    );
  }
}
```

[1]: http://chillestmonkey.com
