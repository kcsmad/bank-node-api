export default interface Transaction {
    id: String;
    accountId: String;
    categoryId: String;
    reference: String;
    amount: number;
    currency: String;
    date: DateTime;
}
