import { Bike } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBike = async (data: Bike) => {
  const result = await prisma.bike.create({
    data: data,
  });

  return result;
};

export const BikeService = {
  createBike,
};