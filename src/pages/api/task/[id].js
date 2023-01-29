import dbConnect from "@/utils/dbConnect";
import Task from '@/models/Task';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'DELETE':
            try {
                const tasks = await Task.findByIdAndDelete(req.query.id);
                res.status(200).json({ 
                    success: true,
                    data: tasks
                });
            } catch (error) {
                res.status(400).json({ success: false});
            }
            break;
    }
}