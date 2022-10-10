const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Datetime

  type Merchants {
    id: Int!
    merchant_name: String!
    phone_number: String!
    latitude: Float!
    longtitude: Float!
    is_active: Boolean
    created_at: Datetime!
  }

  input MerchantInput {
    merchant_name: String!
    phone_number: String!
    latitude: Float!
    longtitude: Float!
    is_active: Boolean
  }

  type Response {
    success: Boolean
    status_code: Int
    message: String
  }

  type Query {
    merchants: [Merchants]
    merchant(id: Int): Merchants
    merchantsByPagination(page: Int, limit: Int): [Merchants]
  }

  type Mutation {
    addMerchants(merchant: MerchantInput): Response
    updateMerchants(merchant: MerchantInput): Response
    batchUpdateStatus(status: Boolean): Response
  }
`;

module.exports = typeDefs;
