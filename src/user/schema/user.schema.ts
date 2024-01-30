import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })

export class User extends Document {

  @Prop({require:true})
  name: string;

  @Prop({require:true})
  age: number;
 
  @Prop({require:true})
  mobileNumber: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

