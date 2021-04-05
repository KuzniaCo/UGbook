import { Prop, Schema, SchemaFactory, unique } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    
    @Prop({ required: true })
    @unique()
    authorId: string;

    @Prop({ required: true })
    content: string;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
