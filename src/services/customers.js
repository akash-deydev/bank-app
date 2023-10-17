import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://65.0.61.231:8080/api/v1/bank/",
  }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getCustomerDetail: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
    }),
    getAllTransactions: builder.query({
      query: () => ({
        url: "/all-transactions",
        method: "GET",
      }),
    }),
    handleFundTransfer: builder.mutation({
      query: (transactionData) => ({
        url: "fund-transfer/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: transactionData,
      }),
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useGetCustomerDetailQuery,
  useGetAllTransactionsQuery,
  useHandleFundTransferMutation,
} = customersApi;
