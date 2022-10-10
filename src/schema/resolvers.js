const { GraphQLScalarType } = require("graphql");
const moment = require("moment");
// const { ApolloError } = require("apollo-server-express");
const { attachPaginate } = require("knex-paginate");
attachPaginate();
const db = require("../db/db");

const datetimeScalar = new GraphQLScalarType({
  name: "Datetime",
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return moment(value).format("DD-MM-YYYY HH:mm:ss");
  },
});

module.exports = {
  Query: {
    merchants: async (_, {}, { Merchants }) => {
      console.log("GRAPHQL::QUERY::MERCHANTS::" + new Date().toLocaleString());
      return await db.select().table("merchants").where("is_active", true);
    },
    merchant: async (_, { id }, { Merchants }) => {
      console.log(
        "GRAPHQL::QUERY::MERCHANT_BY_ID::" + new Date().toLocaleString()
      );

      let res = await db("merchants").where("id", id);
      // console.log("res => ", JSON.stringify(res));
      return res[0]; // extract obj fom array of obj
    },
    merchantsByPagination: async (_, { page, limit }, { Merchants }) => {
      console.log(
        "GRAPHQL::QUERY::MERCHANTS_BY_PAGINATION::" +
          new Date().toLocaleString()
      );

      let res = await db("merchants").paginate({
        perPage: limit,
        currentPage: page,
      });

      // console.log("res => ", JSON.stringify(res));
      return res.data;
    },
  },
  Mutation: {
    addMerchant: async (_, new_merchant) => {
      console.log(
        "GRAPHQL::MUTATION::ADD_MERCHANT::" + new Date().toLocaleString()
      );
      console.log("new data => ", JSON.stringify(new_merchant));
      let res = await db("merchants").where(
        "merchant_name",
        new_merchant.merchant.merchant_name
      );
      console.log("res => ", JSON.stringify(res));
      if (res.length > 0) {
        return {
          success: false,
          status_code: 401,
          message:
            "the merchant with name, " +
            new_merchant.merchant.merchant_name +
            " already exist",
        };
      }
      res = await db("merchants").insert({
        merchant_name: new_merchant.merchant.merchant_name,
        phone_number: new_merchant.merchant.phone_number,
        latitude: new_merchant.merchant.latitude,
        longtitude: new_merchant.merchant.longtitude,
        is_active: new_merchant.merchant.is_active,
      });

      // console.log(res);
      if (res) {
        return {
          success: true,
          status_code: 201,
          message: "Successfully insert the record",
        };
      } else {
        return {
          success: false,
          status_code: 401,
          message:
            "fail to insert the record for merchant with name, " +
            new_merchant.merchant.merchant_name,
        };
      }
    },
    updateMerchant: async (_, new_merchant) => {
      console.log(
        "GRAPHQL::MUTATION::UPDATE_MERCHANT::" + new Date().toLocaleString()
      );
      console.log("update data => ", JSON.stringify(new_merchant));
      let res = await db("merchants").where("id", new_merchant.merchant.id);
      console.log("res => ", JSON.stringify(res));
      if (res.length == 0) {
        return {
          success: false,
          status_code: 404,
          message:
            "the merchant with name, " +
            new_merchant.merchant.merchant_name +
            " not found",
        };
      }
      res = await db("merchants")
        .where({ id: new_merchant.merchant.id })
        .update(
          {
            merchant_name: new_merchant.merchant.merchant_name,
            phone_number: new_merchant.merchant.phone_number,
            latitude: new_merchant.merchant.latitude,
            longtitude: new_merchant.merchant.longtitude,
            is_active: new_merchant.merchant.is_active,
          },
          [
            "merchant_name",
            "phone_number",
            "latitude",
            "longtitude",
            "is_active",
          ]
        );

      // console.log(res);
      if (res.length) {
        return {
          success: true,
          status_code: 201,
          message: "successfully update the record",
        };
      } else {
        return {
          success: false,
          status_code: 401,
          message:
            "fail to update the record for merchant with name, " +
            new_merchant.merchant.merchant_name,
        };
      }
    },
    batchUpdateStatus: async (_, status) => {
      console.log(
        "GRAPHQL::MUTATION::BATCH_UPDATE_STATUS::" + new Date().toLocaleString()
      );
      console.log("status => ", status);
      let res = await db("merchants").update("is_active", status.status);
      // console.log("res after update => ", res);
      return {
        success: true,
        status_code: 201,
        message: "successfully update the record",
      };
    },
  },
  Datetime: datetimeScalar,
};
