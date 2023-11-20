export class Personne{
  id: number;
  name: string;
  firtName: string;
  age:number;
  path: string;
  cin: number;
  job:string;


  constructor(id=0, name="", firtName="", age=0, path="", cin=0, job="") {
    this.id = id;
    this.name = name;
    this.firtName = firtName;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}
