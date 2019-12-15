# react-native-barato-app

Application created to test knowledge in React Native.

To build this project you need a environment with:

- [NodeJS](https://nodejs.org/)
- Yarn `npm i -g yarn`
- Android Studio [Android Studio](https://developer.android.com/studio/index.html)

## Project Develoment

First you need to setup de node_modules proyect with:

```sh
$ yarn
```

## Project Run Android

You have to create an android virtual machine or connect your cell phone:

```sh
$ npx react-native run-android
```

## Project Run Android

You need Xcode:

```sh
$ npx react-native run-ios
```

If you don't know how to do this you can see the following link:
[Link- getting started RN](https://facebook.github.io/react-native/docs/getting-started)

## Build APK Android

To create the android apk you have to run in terminal:

```sh
$ cd android && ./gradlew assembleRelease
```

Search apk in: `ReactBaratonApp/android/app/build/outputs/apk/release/app-release.apk`
