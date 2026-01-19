import EventEmitter from "eventemitter3";

export class PIXIView extends EventEmitter {
  protected loadingSelf: Promise<unknown> | null = null;
  protected loadingSubviews: Promise<unknown> | null = null;
  protected loading: Promise<PIXI.DisplayObject | null> | null = null;

  protected loaded = false;
  protected symbol: PIXI.DisplayObject | null = null;

  protected subViews: PIXIView[] = [];

  constructor(symbol?: PIXI.DisplayObject | null) {
    super();
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

  getSymbol(): PIXI.DisplayObject | Promise<PIXI.DisplayObject | null> | null {
    if (!this.loaded) {
      return this.load();
    }

    return this.symbol;
  }

  // добавлен геттер для isLoading
  get isLoading(): boolean {
    return !!this.loading;
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

  // ------------------------
  // Loading pipeline
  // ------------------------

  /**
   * Можно переопределять в наследниках
   */
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

  /**
   * Можно переопределять в наследниках
   */
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

  /**
   * Можно переопределять в наследниках
   */
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
