import { Bike } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBike = async (data: Bike) => {
  const result = await prisma.bike.create({
    data: data,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await prisma.customer.findMany();

  return result;
};

const getByIdFromDB = async (bikeId: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId
    },
  });

  return result;
};
export const BikeService = {
  createBike,
  getAllFromDB,
  getByIdFromDB
};