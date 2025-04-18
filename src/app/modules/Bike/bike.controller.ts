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


export const BikeController = {
  createBike
};
