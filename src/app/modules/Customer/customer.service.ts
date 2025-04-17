import { Customer } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createCustomer = async (data: Customer) => {
  const result = prisma.customer.create({
    data: data
  })

  return result;
};

export const CustomerService = {
  createCustomer,
};
