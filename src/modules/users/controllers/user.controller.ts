import User, { IUser } from "../schemas/user.schema";

export class UserController {
  constructor() {}

  public async createNewUser(userName: string): Promise<IUser> {
    const userExists: IUser = await this.checkIfUserExists(userName);
    if (userExists) {
      return userExists;
    } else {
      const user = new User({
        userName,
      });
      return user.save();
    }
  }

  public async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }

  private async checkIfUserExists(userName: string): Promise<IUser> {
    return await User.findOne({ userName });
  }
}
