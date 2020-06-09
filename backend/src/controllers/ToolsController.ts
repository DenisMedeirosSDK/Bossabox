import { Request, Response } from 'express';
import Tools from '../models/Tools';

export default {
  async index(request: Request, response: Response) {
    const tools = await Tools.find();

    return response.json(tools);
  },
  async show(request: Request, response:Response) {
    const { tags } = request.query;

    const partsedTags = String(tags).split(',').map(tag => String(tag).trim());

    const Tag = await Tools.find({
      tags: {
        $in:partsedTags
      }
    });

    return response.json(Tag);
  },
  async create(request:Request, response:Response){
    const { title, description, link, tags } = request.body;

    const parsedTags = String(tags).split(',').map(tag => String(tag).trim());

    const tool = await Tools.create({
      title,
      description,
      link,
      tags:parsedTags
    });

    return response.status(201).json(tool);
  },
  async delete(request:Request, response:Response) {
    const { id } = request.params;

    await Tools.findByIdAndDelete(id);

    return response.status(204).send();
  }
}
