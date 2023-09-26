class BasicDetail {
    firstName;
    lastName;
    displayName;
    email;
    mobileNumber;

    constructor(args) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.displayName = args.displayName;    
        this.email = args.email;
        this.mobileNumber = args.mobileNumber;
    }
}

module.exports = BasicDetail;

