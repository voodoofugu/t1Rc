export class PIXIView {
  protected loadingSelf: Promise<unknown> | null = null;
  protected loadingSubviews: Promise<unknown> | null = null;
  protected loading: Promise<PIXI.DisplayObject | null> | null = null;

  protected loaded = false;
  protected symbol: PIXI.DisplayObject | null = null;

  protected subViews: PIXIView[] = [];

  constructor(symbol?: PIXI.DisplayObject | null) {
    if (symbol) {
      this.symbol = symbol;
    }
  }

  // ------------------------
  // Public API
  // ------------------------

  setRenderable(renderable: boolean) {
    if (this.symbol) {
      this.symbol.renderable = renderable;
    }
  }

  addSubViews(views?: PIXIView[] | null) {
    if (!views) return;
    views.forEach((view) => this.addSubView(view));
  }

  addSubView(view: PIXIView) {
    this.subViews.push(view);
    return view;
  }

  removeSubview(view: PIXIView) {
    const index = this.subViews.indexOf(view);
    if (index > -1) {
      this.subViews.splice(index, 1);
    }
  }

  getSymbol(): PIXI.DisplayObject | Promise<PIXI.DisplayObject | null> | null {
    if (this.loaded && this.symbol) {
      return this.symbol;
    }

    if (this.symbol && !this.loadingSelf && !this.loadingSubviews) {
      this.loaded = true;
      return this.symbol;
    }

    if (!this.loading) {
      this.loadingSelf = this.loadSelf();
      this.loadingSubviews = this.loadSubviews();

      const pending: Promise<unknown>[] = [];
      if (this.loadingSelf) pending.push(this.loadingSelf);
      if (this.loadingSubviews) pending.push(this.loadingSubviews);

      if (pending.length) {
        this.loading = Promise.all(pending).then(() => {
          this.loadingSelf = null;
          this.loadingSubviews = null;
          this.loading = null;
          this.loaded = true;
          return this.symbol;
        });
      } else {
        this.loaded = true;
        return this.symbol;
      }
    }

    return this.loading;
  }

  get isLoading(): boolean {
    return !!this.loading;
  }

  // ------------------------
  // Loading pipeline
  // ------------------------

  load(): Promise<PIXI.DisplayObject | null> {
    if (this.loaded) {
      return Promise.resolve(this.symbol);
    }

    if (this.loading) {
      return this.loading;
    }

    this.loadingSelf = this.loadSelf();
    this.loadingSubviews = this.loadSubviews();

    const pending: Promise<unknown>[] = [];
    if (this.loadingSelf) pending.push(this.loadingSelf);
    if (this.loadingSubviews) pending.push(this.loadingSubviews);

    if (pending.length) {
      this.loading = Promise.all(pending).then(() => {
        this.loadingSelf = null;
        this.loadingSubviews = null;
        this.loading = null;
        this.loaded = true;
        return this.symbol;
      });
      return this.loading;
    }

    this.loaded = true;
    return Promise.resolve(this.symbol);
  }

  protected loadSelf(): Promise<unknown> | null {
    if (this.loadingSelf) return this.loadingSelf;
    return null;
  }

  protected loadSubviews(): Promise<unknown> | null {
    if (this.loadingSubviews) return this.loadingSubviews;
    if (this.subViews.length) {
      return Promise.all(this.subViews.map((view) => view.load()));
    }
    return null;
  }

  // ------------------------
  // Destroy
  // ------------------------

  destroy() {
    this.subViews.forEach((view) => view.destroy());
    this.subViews.length = 0;

    if (this.symbol) {
      this.symbol.destroy?.();
      this.symbol = null;
    }

    this.loaded = false;
    this.loading = null;
    this.loadingSelf = null;
    this.loadingSubviews = null;
  }
}
