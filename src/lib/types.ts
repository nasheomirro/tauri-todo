export type Todo = {
  readonly name: string;
  readonly id: string;
  readonly tags: Tag[];
  readonly dateCreated: Date;
};

export type Tag = {
  readonly name: string;
  readonly id: string;
  readonly color: string;
};