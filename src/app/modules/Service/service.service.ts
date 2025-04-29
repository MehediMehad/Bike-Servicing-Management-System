import { ServiceRecord, ServiceStatus } from "@prisma/client";
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

const updateIntoDB = async (serviceId: string, payload: {completionDate?: Date }) => {

  const existingService = await prisma.serviceRecord.findUnique({
    where: { serviceId: serviceId },
  });
  if (!existingService) {
    throw new Error('Service not found');
  }

  const updatedService = await prisma.serviceRecord.update({
    where: { serviceId: serviceId },
    data: {
      completionDate: payload.completionDate || new Date(), 
      status: ServiceStatus.done,
    },
    select: {
      serviceId: true,
      bikeId: true,
      serviceDate: true,
      completionDate: true,
      description: true,
      status: true,
    },
  });
  return updatedService;
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