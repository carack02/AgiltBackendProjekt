import type { Response, Request } from 'express';

export async function createCollection(req: Request, res: Response) {
  return res.json({ message: 'createCollection was run' });
}
export async function getCollections(req: Request, res: Response) {
  return res.json({ message: 'getCollections was run' });
}

export async function deleteCollection(req: Request, res: Response) {
  return res.json({ message: 'deleteCollection was run' });
}

export async function getCollectionById(req: Request, res: Response) {
  return res.json({ message: 'getCollectionById was run' });
}

export async function updateCollection(req: Request, res: Response) {
  return res.json({ message: 'updateCollection was run' });
}
