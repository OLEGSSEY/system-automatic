import { sql } from "../db.js"

export async function uploadFiles(req, res) {
    try {
        if (!req.file) {
            throw new Error("Файл не был загружен");
        }

        const { title, description } = req.body;
        const filename = req.file.filename;

        const data = await sql `insert into Requests (title, description, image) values (${title}, ${description}, ${filename}) RETURNING *`;
        console.log({ data });
        res.send(data);
    } catch (error) {
        console.log("Ошибка при загрузке файла ", error);
        res.status(400).send({ error: error.message });
    }
}
