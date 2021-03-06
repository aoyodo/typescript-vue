declare namespace QueryString {
  interface IStringifyOptions {
      delimiter?: string;
      strictNullHandling?: boolean;
      skipNulls?: boolean;
      encode?: boolean;
      filter?: any;
      arrayFormat?: any;
      indices?: string;
  }
  interface IParseOptions {
      delimiter?: string;
      depth?: number;
      arrayLimit?: number;
      parseArrays?: boolean;
      allowDots?: boolean;
      plainObjects?: boolean;
      allowPrototypes?: boolean;
      parameterLimit?: number;
      strictNullHandling?: boolean;
  }
  function stringify(obj: any, options?: IStringifyOptions): string;
  function parse(str: string, options?: IParseOptions): any;
}
declare module 'qs' {
  export = QueryString;
}
