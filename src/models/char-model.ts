export default class Character {
  constructor(
    public id: number,
    public name: string,
    public show: string,
    public traits: string,
    public isFave: boolean,
    public img: string
  ) {}
}
