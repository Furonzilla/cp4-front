export class IdeaToModify {
  private _id: number;
  private _title: string;
  private _pictureFilename: string;

  constructor(
    id: number,
    title: string,
    pictureFilename: string
  ) {
    this._id = id;
    this._title = title;
    this._pictureFilename = pictureFilename;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Getter username
   * @return {string}
   */
  public get pictureFilename(): string {
    return this._pictureFilename;
  }

  /**
   * Setter username
   * @param {string} value
   */
  public set pictureFilename(value: string) {
    this._pictureFilename = value;
  }
}
