import { Schema } from "mongoose";
import { IAdmin } from "../interfaces/IAdmin";
declare const AdminModel: import("mongoose").Model<IAdmin, {}, {}, {}, import("mongoose").Document<unknown, {}, IAdmin, {}> & IAdmin & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default AdminModel;
