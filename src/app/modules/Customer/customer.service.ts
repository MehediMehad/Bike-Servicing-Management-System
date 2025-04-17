import { Customer } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createCustomer = async (data: Customer) => {
  const result = await prisma.customer.create({
    data: data
  })

  return result;
};

const getAllFromDB = async () => {

  const result = await prisma.customer.findMany()

  return result;
};

const getByIdFromDB = async (customerId: string) => {

  const result = await prisma.customer.findUniqueOrThrow({
    where: {
        customerId,
    }
  })

  return result;
};

export const CustomerService = {
  createCustomer,
  getAllFromDB,
  getByIdFromDB
};
