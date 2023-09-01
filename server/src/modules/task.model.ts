import { getModelForClass, prop, pre } from "@typegoose/typegoose";

// will also be the task interface
export class Task {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public description: string;
}

// export as a model
export const TaskModel = getModelForClass(Task, {
  schemaOptions: {
    timestamps: true,
  },
});
