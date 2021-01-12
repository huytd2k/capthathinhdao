export class BaseEntity<T> {
  constructor(pt: Partial<T>) {
    Object.assign(this, pt);
  }
}
