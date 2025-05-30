import { Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { CustomerService } from "./customer.service";


const createCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.createCustomer(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
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

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await CustomerService.getByIdFromDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result,
      });

})

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await CustomerService.updateIntoDB(id, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result,
      });

})

const deleteIntoDB = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await CustomerService.deleteIntoDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer deleted successfully",
      });

})

export const CustomerController = {
  createCustomer,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteIntoDB
};
