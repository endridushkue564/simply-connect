/* sophisicated_code.js */

// This code uses Object-oriented programming to create a complex software system that simulates a bank account management system.

class Bank {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index > -1) {
      this.customers.splice(index, 1);
    }
  }

  getTotalBalance() {
    let totalBalance = 0;
    for (let customer of this.customers) {
      totalBalance += customer.getAccountBalance();
    }
    return totalBalance;
  }
}

class Customer {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.accounts = [];
  }

  openAccount(account) {
    this.accounts.push(account);
  }

  closeAccount(account) {
    const index = this.accounts.indexOf(account);
    if (index > -1) {
      this.accounts.splice(index, 1);
    }
  }

  getAccountBalance() {
    let totalBalance = 0;
    for (let account of this.accounts) {
      totalBalance += account.balance;
    }
    return totalBalance;
  }
}

class Account {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log(`Insufficient funds. Current balance: $${this.balance}`);
    }
  }
}

// Creating instances of the bank, customers, and accounts

const bank = new Bank("MyBank", "123 Main St");

const customer1 = new Customer("John", 25, "456 Elm St");
const customer2 = new Customer("Alice", 30, "789 Oak St");

const account1 = new Account("A0001");
const account2 = new Account("A0002");

customer1.openAccount(account1);
customer2.openAccount(account2);

account1.deposit(1000);
account2.deposit(500);
account1.withdraw(200);
account2.withdraw(100);
account1.withdraw(1500);

bank.addCustomer(customer1);
bank.addCustomer(customer2);

console.log("Bank: ", bank);
console.log("Total Balance: $", bank.getTotalBalance());