import dbConnect from "@/utils/dbConnect";
import Task from '@/models/Task';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const tasks = await Task.find({});

                res.status(200).json({ 
                    success: true,
                    data: tasks
                });
            } catch (error) {
                res.status(400).json({ success: false});
            }
            break;
        case 'POST':
            try {
                console.log(req.body)
                const task = await Task.create(req.body);

                res.status(201).json({ 
                    success: true,
                    data: task
                });
            } catch (error) {
                res.status(400).json({ success: false})
                console.log(error)
            }
            break;
    }
}