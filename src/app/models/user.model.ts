import { Pizza } from './pizza.model';

export class User {
    username: string;
    email: string;
    password: string;
    role: string;
    pizzas: Pizza[];
    token: string;
}
