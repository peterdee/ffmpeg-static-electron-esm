## ffmpeg-static-electron-esm

The module returns a file path to the installed ffmpeg binary for the target operating system. 

It is a modified version from the original [ffmpeg-static](https://github.com/pietrop/ffmpeg-static) to use [`electron-builder` file macros  in `package.json`, where OS name are `mac`, `linux` or `win`](https://www.electron.build/file-patterns/#file-macros)

In `ffmpeg-static`, recognising the target OS is done with [`os.platform()`](https://nodejs.org/api/os.html#os_os_platform) where mac os x is  recognised as`darwin` rather then `mac`.

The need to tailor ffmpeg-static to use with `electron-builder` came from a use cases such as that of [autoEdit.io](http://autoEdit.io). 

See here for more info on [How to package ffmpeg with the fluent-ffmpeg node library in electron, so that you only ship the binaries for the target operating system](https://pietropassarelli.com/ffmpeg-electron.html)

There is also [`ffprobe-static-electron-esm`](https://github.com/peterdee/ffprobe-static-electron-esm)

### Usage

Returns the path of a statically linked ffmpeg binary on the local filesystem.

```javascript
import ffmpegPath from 'ffmpeg-static-electron-esm';
console.log(ffmpeg.path);
```

### License

[MIT](./LICENSE.md)
