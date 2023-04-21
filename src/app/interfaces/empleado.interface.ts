export interface IEmpleado {
  status: string;
  data: IDataEmpleado[];
  message: string;
}

export interface IDataEmpleado {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export interface IEmpleadoPost {
  status: string;
  data: IDataEmpleadoPost;
}

export interface IDataEmpleadoPost {
  id?: number;
  name: string;
  salary: number;
  age: number;
}
