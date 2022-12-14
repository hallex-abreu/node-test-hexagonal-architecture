import { describe, expect, it } from "vitest";
import { InMemoryCustomerRepositoryAdapter } from "../../adapters/out/in-memory-adapter/in-memory-customer-repository-adapter";
import { Customer } from "../entities/customer";
import { CreateCustomer } from "./create-customer";

describe('Create customer', () => {
    it('Should be able to create an customer', () => {
        const customerRepository = new InMemoryCustomerRepositoryAdapter;

        const customer = new Customer({
            name: 'Hallex abreu',
            email: 'contato.hallexabreu@gmail.com',
            phone: '85989323895'
        });

        const sut = new CreateCustomer(customerRepository);

        expect(sut.execute(customer)).resolves.toBeInstanceOf(Customer) 
    });
});