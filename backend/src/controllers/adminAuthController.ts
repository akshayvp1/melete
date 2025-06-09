// import { Request, Response } from "express";
// import { inject, injectable } from "tsyringe";
// import { IAdminAuthController } from "./interface/IAdminAuthController";
// import AdminAuthService from "../services/AdminAuthService";

// @injectable()
// class AdminAuthController implements IAdminAuthController {
//     constructor(
//         @inject("AdminAuthService") private adminAuthService: AdminAuthService // Fix the token here
//     ) {}

//     signIn = async (req: Request, res: Response): Promise<void> => {
//         try {
//           console.log("helloooo");
          
//             const { email, password } = req.body;

//             const signInResult = await this.adminAuthService.signIn(email, password);

//             if (!signInResult.isMatch) {
//                 res.status(400).json({
//                     success: false,
//                     message: signInResult.message || "Incorrect email or password.",
//                 });
//                 return;
//             }

//             const { accessToken, refreshToken, user } = signInResult;

//             res.cookie("refreshToken", refreshToken, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === "production",
//                 sameSite: "lax",
//                 maxAge: 7 * 24 * 60 * 60 * 1000,
//             });

//             res.status(200).json({
//                 success: true,
//                 accessToken,
//                 user,
//                 message: "Login successful.",
//             });
//         } catch (error) {
//             console.error("Error in signIn controller:", error);
//             res.status(500).json({ success: false, message: "Internal server error." });
//         }
//     };
//     addCounsellor=async(req:Request,res:Response):Promise<void>=>{
//         try{
//          const currentId = req.user?.id
//          if(!currentId){
//             res.status(401).json({success:false,message:"unauthorized"})
//             return 
//          }
//          const counsellorData = req.body;
//          const counsellor = await this.addCounsellor(currentId as string,counsellorData)
//          res.status(201).json({ success: true, data:counsellor });

//         }catch(error){
//             console.log(error)
//         }
//     }
// }

// export default AdminAuthController;




import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IAdminAuthController } from "./interface/IAdminAuthController";
import AdminAuthService from "../services/AdminAuthService";

interface ICounsellorData {
  name: string;
  qualification: string;
  expertise: string[];
  languages: string[];
  counsellingTypes: string[];
  experience: string;
  location: string;
  imageUrl?: string;
  bio: string;
  email: string;
  phone: string;
  specialization: string;
}

@injectable()
class AdminAuthController implements IAdminAuthController {
    constructor(
        @inject("AdminAuthService") private adminAuthService: AdminAuthService
    ) {}

    signIn = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            const signInResult = await this.adminAuthService.signIn(email, password);

            if (!signInResult.isMatch) {
                res.status(400).json({
                    success: false,
                    message: signInResult.message || "Incorrect email or password.",
                });
                return;
            }

            const { accessToken, refreshToken, user } = signInResult;

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.status(200).json({
                success: true,
                accessToken,
                user,
                message: "Login successful.",
            });
        } catch (error) {
            console.error("Error in signIn controller:", error);
            res.status(500).json({ success: false, message: "Internal server error." });
        }
    };

    addCounsellor = async (req: Request, res: Response): Promise<void> => {
        try {
            console.log("daaaa");
            
            const currentId = req.user?.id;
            if (!currentId) {
                res.status(401).json({ success: false, message: "Unauthorized" });
                return;
            }

            const counsellorData: ICounsellorData = req.body;

            // Validate required fields
            if (!counsellorData.name || !counsellorData.email || !counsellorData.location || 
                !counsellorData.qualification || !counsellorData.experience) {
                res.status(400).json({ success: false, message: "Missing required fields" });
                return;
            }

            const counsellor = await this.adminAuthService.addCounsellor(currentId, counsellorData);

            res.status(201).json({ 
                success: true, 
                data: counsellor,
                message: "Counsellor added successfully"
            });
        } catch (error: any) {
            console.error("Error in addCounsellor controller:", error);
            res.status(500).json({ 
                success: false, 
                message: error.message || "Failed to add counsellor"
            });
        }
    };

    getCounsellors = async(_req:Request,res:Response):Promise<void>=>{
        try{
          const counsellors = await this.adminAuthService.getCounsellors()
          res.status(200).json(counsellors);

        }
        catch(error){
           console.error(error);
           res.status(500).json({ message: "Internal server error" });
        }
    }
  blockCounsellors = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    console.log(userId, "userid");
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }
    const updatedCounsellor = await this.adminAuthService.blockCounsellors(userId);
    res.status(200).json({ 
      success: true, 
      data: updatedCounsellor, 
      message: "Counsellor blocked successfully" 
    });
  } catch (error: any) {
    console.error("Controller Error - blockUser:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
}

unBlockCounsellors = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    console.log(userId, "oooo");
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }
    const updatedCounsellor = await this.adminAuthService.unBlockCounsellors(userId);
    res.status(200).json({ 
      success: true, 
      data: updatedCounsellor, 
      message: "Counsellor unblocked successfully" 
    });
  } catch (error: any) {
    console.error("Controller Error - unblockUser:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
}
// In AdminAuthController.ts
updateCounsellor = async (req: Request, res: Response): Promise<void> => {
  try {
    const currentId = req.user?.id;
    if (!currentId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const { id } = req.params;
    const counsellorData: ICounsellorData & { rating?: number; sessions?: number; isBlocked?: boolean } = req.body;

    // Validate required fields
    if (!counsellorData.name || !counsellorData.email || !counsellorData.location || 
        !counsellorData.qualification || !counsellorData.experience) {
      res.status(400).json({ success: false, message: "Missing required fields" });
      return;
    }

    const updatedCounsellor = await this.adminAuthService.updateCounsellor(id as string, counsellorData);

    res.status(200).json({
      success: true,
      data: updatedCounsellor,
      message: "Counsellor updated successfully",
    });
  } catch (error: any) {
    console.error("Error in updateCounsellor controller:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update counsellor",
    });
  }
};

}

export default AdminAuthController;