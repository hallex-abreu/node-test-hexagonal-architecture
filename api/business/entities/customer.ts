export interface ICustomer{
    id?: number, 
    name: string,
    email: string,
    phone: string,
    created_at?: Date,
    updated_at?: Date
}

export class Customer {
    private props: ICustomer;
    
    get id(): number | undefined{
        return this.props.id;
    }

    get name(): string{
        return this.props.name;
    }

    get email(): string{
        return this.props.email;
    }

    get phone(): string{
        return this.props.phone;
    }

    get created_at(): Date | undefined{
        return this.props.created_at;
    }

    get updated_at(): Date | undefined{
        return this.props.updated_at;
    }

    constructor(props: ICustomer){
        this.props = props;
    }
}