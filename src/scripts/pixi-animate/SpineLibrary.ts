// // @flow

// // import spineHash from "conf/spine";
// // import { loadResource, Resources } from "utils/animation/loader";
// PIXI = window.PIXI;

// import App from "App";
// import { cdnURL } from "utils/jsxHelpers";
// // eslint-disable-next-line no-unused-vars
// import spine from "vendor/pixi-spine-3.8";

// type Options = ?{
//   resolution?: number,
//   baseUrl?: string,
//   spineAtlasFile?: string,
//   fileName?: string,
//   fileExt?: string,
// };

// export default class SpineLibrary {
//   static libraries: { [name: string]: SpineLibrary } = {};
//   // data: ?{ spineData: Object } = null;
//   // name: string;
//   // options: Options;
//   // loading: ?Promise<SpineLibrary> = null;
//   // loaded = false;
//   // retry = false;

//   constructor(name: string, options: Options) {
//     this.name = name;
//     this.options = options;
//     this.loader = new PIXI.loaders.Loader();
//   }

//   get = () => {
//     if (this.loaded && this.data && this.data.spineData) {
//       return new PIXI.spine.Spine(this.data.spineData);
//     } else {
//       if (!this.retry) {
//         this.retry = true;
//         this.load().then(() => {
//           return this.get();
//         });
//       }
//     }
//     return null;
//   };

//   load(options: Options): Promise<SpineLibrary> {
//     if (this.loading) return this.loading;
//     if (this.loaded) return Promise.resolve(this);

//     options = options
//       ? this.options
//         ? Object.assign({}, this.options, options)
//         : options
//       : this.options || {};

//     let resolution = options.resolution || App.getDevicePixelRatio();
//     resolution = resolution > 1 ? 2 : 1;
//     const resExt = resolution === 1 ? "@1x" : "@2x";
//     let spineAtlasFile = options && options.spineAtlasFile;

//     let name = this.name;
//     let fileName = options.fileName || "spine";
//     const fileExt = options.fileExt || "json";
//     let path = `${name}/${fileName}.${fileExt}`;

//     if (!spineAtlasFile) {
//       spineAtlasFile = `${name}${resExt}.atlas`;
//     } else {
//       fileName = spineAtlasFile;
//       path = `${name}.json`;
//       spineAtlasFile = `${name}${resExt}.atlas`;
//       name = `${name}:${fileName}:${resExt}`;
//     }

//     const hash = false;
//     let baseUrl = cdnURL(`monsters-new/`);
//     if (hash) {
//       baseUrl = `static/${hash[`r${resolution}`]}/monsters-new/`;
//     }
//     const add = () => {
//       if (!this.loader.resources[name]) {
//         this.loader.add(name, baseUrl + path, {
//           ...options,
//           baseUrl,
//           spineAtlasFile,
//           name,
//           path,
//           metadata: {
//             spineAtlasFile: baseUrl + spineAtlasFile,
//           },
//           url: baseUrl + path,
//         });
//       }
//     };
//     if (this.loader.loading) this.loader.onComplete.add(add);
//     else add();

//     return new Promise(resolve => {
//       this.loader.load((_loader, resources) => {
//         resolve(resources);
//       });
//     }).then(resources => {
//       this.data = resources[name];
//       this.loading = null;
//       this.loaded = true;
//       return this;
//     });
//   }

//   static add(
//     name: string,
//     options?: ?Options = null,
//     load: boolean = false
//   ): SpineLibrary {
//     const spineAtlasFile = options && options.spineAtlasFile;
//     const localName = spineAtlasFile
//       ? `${name}:${spineAtlasFile}`
//       : name;
//     let lib = this.libraries[localName];
//     if (!lib) {
//       lib = new SpineLibrary(name, options);
//       this.libraries[localName] = lib;
//       if (load) lib.load();
//       return lib;
//     } else {
//       if (load && !lib.loaded && !lib.loading) {
//         lib.load();
//       }
//     }
//     return this.libraries[localName];
//   }

//   static get(
//     name: string,
//     options: ?Options = null,
//     load: boolean = false
//   ) {
//     const spineAtlasFile = options && options.spineAtlasFile;
//     const localName = spineAtlasFile
//       ? `${name}:${spineAtlasFile}`
//       : name;
//     let lib = this.libraries[localName];
//     if (lib) return lib;

//     return SpineLibrary.add(name, options, load);
//   }
// }
