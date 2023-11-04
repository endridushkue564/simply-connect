/* sophisticated_code.js */

// This code is a complex implementation of a banking system.
// It includes classes for Bank, Account, Customer, Transaction, and more.

class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.accounts = [];
    this.transactions = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  openAccount(customer, initialDeposit) {
    const account = new Account(this.generateAccountNumber(), customer);
    account.deposit(initialDeposit);
    this.accounts.push(account);
    return account;
  }

  closeAccount(account) {
    const index = this.accounts.indexOf(account);
    if (index !== -1) {
      this.accounts.splice(index, 1);
    }
  }

  makeTransaction(sender, receiver, amount) {
    if (sender instanceof Account && receiver instanceof Account) {
      const transaction = new Transaction(sender, receiver, amount);
      if (transaction.isValid()) {
        sender.withdraw(amount);
        receiver.deposit(amount);
        this.transactions.push(transaction);
        return transaction;
      }
    }
    return null;
  }

  generateAccountNumber() {
    let accountNumber = '';
    const possibleDigits = '0123456789';
    for (let i = 0; i < 10; i++) {
      accountNumber += possibleDigits.charAt(Math.floor(Math.random() * possibleDigits.length));
    }
    return accountNumber;
  }
}

class Account {
  constructor(accountNumber, customer) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

class Customer {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class Transaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
    this.timestamp = new Date();
  }

  isValid() {
    return this.sender.getBalance() >= this.amount;
  }
}

// Usage example:

const bank = new Bank("My Bank");

const customer1 = new Customer("John", 30, "123 Main St");
const customer2 = new Customer("Alice", 28, "456 Oak Ave");
bank.addCustomer(customer1);
bank.addCustomer(customer2);

const account1 = bank.openAccount(customer1, 1000);
const account2 = bank.openAccount(customer2, 500);

console.log(account1.getBalance()); // Output: 1000
console.log(account2.getBalance()); // Output: 500

const transaction = bank.makeTransaction(account1, account2, 400);
console.log(transaction); // Output: Transaction object

console.log(account1.getBalance()); // Output: 600
console.log(account2.getBalance()); // Output: 900

bank.closeAccount(account1);

console.log(bank.accounts.length); // Output: 1
