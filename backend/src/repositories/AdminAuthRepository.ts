import { inject, injectable } from "tsyringe";
import { IAdminAuthRepository } from "./interface/IAdminAuthRepository";
import { IAdmin } from "../interfaces/IAdmin";
// import AdminModel from "../models/adminModels";
import { Model } from "mongoose";

@injectable()
class AdminAuthRepository implements IAdminAuthRepository {
    private readonly adminModel: Model<IAdmin>;

    constructor(@inject("AdminModel") adminModel: Model<IAdmin>) {
        this.adminModel = adminModel;
    }
    async findByEmail(email: string): Promise<IAdmin | null> {
    try {
       
      return await this.adminModel.findOne({email:email})
      
      
    } catch (error) {
      console.error("Error finding admin by email:", error);
      return null;
    }
  }
  async findAdminById(id: string): Promise<IAdmin | null> {
    try {
      return await this.adminModel.findById(id).select("-password").lean();
    } catch (error) {
      console.error("Error finding admin by ID:", error);
      return null;
    }
  }
}

export default AdminAuthRepository;