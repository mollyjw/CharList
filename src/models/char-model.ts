export default class Character {
  constructor(
    public id: number,
    public name: string,
    public show: string,
    public traits: Array<string>,
    public isFave: boolean,
    public img: string
  ) {}
}
