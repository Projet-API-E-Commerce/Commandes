import { Op } from "sequelize";

export const testController = async (req, res) => {
  return res.status(200).send("hello mec");
}

export default {testController};