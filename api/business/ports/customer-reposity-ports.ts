import { Customer } from "../entities/customer";

export interface CustomerRepositoryPorts{
    findCustomerByEmail(email: string): Promise<Customer | null>
    create(customer: Customer): Promise<Customer>
}