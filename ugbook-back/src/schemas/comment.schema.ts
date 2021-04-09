import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    
    @Prop({ required: true })
    authorId: ObjectId

    @Prop({ required: true })
    content: string;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
