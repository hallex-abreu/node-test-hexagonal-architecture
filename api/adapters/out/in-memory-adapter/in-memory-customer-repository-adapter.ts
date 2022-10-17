import { Customer } from "../../../business/entities/customer";
import { CustomerRepositoryPorts } from "../../../business/ports/customer-reposity-ports";

export class InMemoryCustomerRepositoryAdapter implements CustomerRepositoryPorts{
    public items: Customer[] = [];
    
    async findCustomerByEmail(email: string): Promise<Customer | null> {
        const customer = this.items.find(customer => customer.email === email);

        if(!customer)
            return null;

        return customer;
    }

    async create(customer: Customer): Promise<Customer> {
        this.items.push(customer);   
        return customer;
    }
}