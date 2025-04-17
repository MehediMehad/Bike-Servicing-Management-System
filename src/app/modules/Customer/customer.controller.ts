import { Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { CustomerService } from "./customer.service";


const createCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.createCustomer(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customer created successfully",
      data: result,
    });
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.getAllFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service records fetched successfully",
      data: result,
    });
})

export const CustomerController = {
  createCustomer,
  getAllFromDB
};
