export interface IContact {
  id?: string;
  name: string;
  number: string;
}

export interface IContactState {
  items: IContact[];
  loading: boolean;
  error: string | null;
}
