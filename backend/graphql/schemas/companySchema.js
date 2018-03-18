const companySchema = `
extend type Query {
    companies: [Company],
    companyById(_id: Int!): Company,
    companyByName(companyName: String): Company,
}
type Company {
    _id: Int,
    companyName: String
}`

export default companySchema
