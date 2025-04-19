import { ServiceRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createService = async (data: ServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: data,
  });
  return result;
};

const getAllFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getByIdFromDB = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });
  return result;
};

const updateIntoDB = async (serviceId: string, payload: Partial<ServiceRecord>) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: payload,
  });
  return result;
};

const deleteIntoDB = async (serviceId: string) => {
  const result = await prisma.serviceRecord.delete({
    where: {
      serviceId,
    },
  });
  return result;
};

export const serviceService = {
  createService,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteIntoDB,
};