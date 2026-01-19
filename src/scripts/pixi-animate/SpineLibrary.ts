export interface Options {
  resolution?: number;
  baseUrl?: string;
  spineAtlasFile?: string;
  fileName?: string;
  fileExt?: string;
}

type SpineResource = {
  spineData: unknown;
};

export default class SpineLibrary {
  static libraries: Record<string, SpineLibrary> = {};

  data: SpineResource | null = null;
  name: string;
  options: Options;
  loading: Promise<SpineLibrary> | null = null;
  loaded = false;
  retry = false;
  loader: PIXI.loaders.Loader | null = null;

  constructor(name: string, options: Options) {
    this.name = name;
    this.options = options;
    this.loader = new PIXI.loaders.Loader();
  }

  // ------------------------
  // Public API
  // ------------------------

  get = (): PIXI.spine.Spine | null => {
    if (this.loaded && this.data?.spineData) {
      return new PIXI.spine.Spine(this.data.spineData as any);
    }

    if (!this.retry) {
      this.retry = true;
      this.load().finally(() => {
        this.retry = false;
      });
    }

    return null;
  };

  load(options?: Options): Promise<SpineLibrary> {
    if (this.loading) return this.loading;
    if (this.loaded) return Promise.resolve(this);
    if (!this.loader) return Promise.resolve(this);

    const mergedOptions: Options = options
      ? this.options
        ? { ...this.options, ...options }
        : options
      : this.options || {};

    // resolution изменён, App заменён на window
    let resolution =
      mergedOptions.resolution ??
      Math.max(1, Math.floor(window.devicePixelRatio || 1));

    resolution = resolution > 1 ? 2 : 1;
    const resExt = resolution === 1 ? "@1x" : "@2x";

    let spineAtlasFile = mergedOptions.spineAtlasFile;

    let name = this.name;
    let fileName = mergedOptions.fileName || "spine";
    const fileExt = mergedOptions.fileExt || "json";
    let path = `${name}/${fileName}.${fileExt}`;

    if (!spineAtlasFile) {
      spineAtlasFile = `${name}${resExt}.atlas`;
    } else {
      fileName = spineAtlasFile;
      path = `${name}.json`;
      spineAtlasFile = `${name}${resExt}.atlas`;
      name = `${name}:${fileName}:${resExt}`;
    }

    const baseUrl = mergedOptions.baseUrl ?? "";

    const add = () => {
      if (!this.loader?.resources[name]) {
        this.loader?.add(name, baseUrl + path, {
          ...mergedOptions,
          baseUrl,
          spineAtlasFile,
          name,
          path,
          metadata: {
            spineAtlasFile: baseUrl + spineAtlasFile,
          },
          url: baseUrl + path,
        });
      }
    };

    if (this.loader.loading) {
      this.loader.onComplete.add(add);
    } else {
      add();
    }

    this.loading = new Promise<PIXI.loaders.ResourceDictionary>((resolve) => {
      this.loader!.load(
        (
          _loader: PIXI.loaders.Loader,
          resources: PIXI.loaders.ResourceDictionary,
        ) => {
          resolve(resources);
        },
      );
    }).then((resources) => {
      this.data = resources[name] as SpineResource;
      return this;
    });

    return this.loading;
  }

  // ------------------------
  // Static API
  // ------------------------

  static add(
    name: string,
    options: Options | null = null,
    load: boolean = false,
  ): SpineLibrary {
    const spineAtlasFile = options?.spineAtlasFile;
    const localName = spineAtlasFile ? `${name}:${spineAtlasFile}` : name;

    let lib = this.libraries[localName];

    if (!lib) {
      lib = new SpineLibrary(name, options || {});
      this.libraries[localName] = lib;

      if (load) {
        lib.load();
      }

      return lib;
    }

    if (load && !lib.loaded && !lib.loading) {
      lib.load();
    }

    return lib;
  }

  static get(
    name: string,
    options: Options | null = null,
    load: boolean = false,
  ) {
    const spineAtlasFile = options?.spineAtlasFile;
    const localName = spineAtlasFile ? `${name}:${spineAtlasFile}` : name;

    const lib = this.libraries[localName];
    if (lib) return lib;

    return SpineLibrary.add(name, options, load);
  }
}
