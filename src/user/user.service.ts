import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}
  
  async create(createUserDto: CreateUserDto) : Promise<User> {
    const {age,mobileNumber,name} = createUserDto;
    const Createduser = new this.userModel({ age, mobileNumber, name });
    const savedUser = await Createduser.save();
    return savedUser;
  }

  async findAll() :Promise<User[]> {
    const users= await this.userModel.find().exec();
    return users;
  }

  async findOne (id: string) :Promise<User> {
    const user = await this.userModel.findById(id);
    console.log("user",user)
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    return updatedUser;
  }

  async delete(id: string) :Promise<User> {
    const deleteduser = await this.userModel.findByIdAndDelete(id).exec();
    return deleteduser;
  }


  async deleteAll(): Promise<{ success: boolean; deletedCount: number }> {
    const deleteAlluser = await this.userModel.deleteMany({});
    return { success: true, deletedCount: deleteAlluser.deletedCount };
  }
}
