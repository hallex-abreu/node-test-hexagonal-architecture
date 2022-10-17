import { Customer } from "../entities/customer"
import { CustomerRepositoryPorts } from "../ports/customer-reposity-ports";

interface CreateCustomerRequest{
    name: string,
    email: string,
    phone: string
}

type CreateCustomerResponse = Customer;

export class CreateCustomer{
    constructor(
        private customerRepository: CustomerRepositoryPorts
    ){}

    async execute({ name, email, phone }: CreateCustomerRequest): Promise<CreateCustomerResponse>{
        const exist_customer = await this.customerRepository.findCustomerByEmail(email);

        if(exist_customer)
            throw new Error('Another customer with this email')

        let customer = new Customer({
            name,
            email,
            phone
        });

        customer = await this.customerRepository.create(customer);

        return customer;
    }
}