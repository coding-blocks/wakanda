import R from 'ramda';

export interface SerializerParams {
  attributes: string[];
}

export class BaseSerializer {
  params: SerializerParams;

  constructor(params) {
    this.params = params;
  }

  async sanitize(obj: any) {
    if (obj instanceof Array) {
      return obj.map((row) => R.pick(this.params.attributes, row));
    }

    return R.pick(this.params.attributes, obj);
  }

  async serialize(obj: any, meta: any = {}) {
    return {
      ...meta,
      data: await this.sanitize(obj),
    };
  }
}
