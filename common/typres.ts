export interface IFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ISectionTitle {
  title: string;
  subtitle: string;
}

export interface IPricing {
  title: string,
  description: string,
  price: number | string,
  button: string,
  popular?: boolean,
  features: string[],
}
