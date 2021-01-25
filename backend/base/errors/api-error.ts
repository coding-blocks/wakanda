export interface IApiErrorParams {
  title?: string;
  code?: string;
  detail?: string;
}

export class ApiError extends Error {
  title: string;
  code: string;
  detail: string;
  statusCode: number;

  constructor(params: IApiErrorParams, statusCode: number = 500) {
    super();
    this.title = params.title;
    this.code = params.code;
    this.detail = params.detail;
    this.statusCode = statusCode;
  }
}
