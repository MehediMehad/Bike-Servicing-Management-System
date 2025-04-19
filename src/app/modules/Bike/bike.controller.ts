import { Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { BikeService } from "./bike.service";


const createBike= catchAsync(async (req: Request, res: Response) => {
    const result = await BikeService.createBike(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Bike created successfully",
      data: result,
    });
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
})

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params
  const result = await BikeService.getByIdFromDB(id)

  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });

})


export const BikeController = {
  createBike,
  getAllFromDB,
  getByIdFromDB
};
