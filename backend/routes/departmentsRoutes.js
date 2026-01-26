import express from "express";
import Department from "../models/Department.js";
import { downloadFile } from "../config/cloudinary.js";
import { handleFileUpload, handleFileDeletion, getFileUrl } from "../utils/fileUpload.js";

const router = express.Router();

router.post("/", downloadFile.single("file"), async (req, res) => {
  try {
    console.log("Received upload request:", req.body);
    const { title, description } = req.body;
    
    const fileData = handleFileUpload(req.file, 'Department');
    const newDownload = new Department({ 
      title, 
      description, 
      fileUrl: fileData.path,
      fileSize: fileData.size,
      cloudinaryPublicId: fileData.cloudinaryPublicId || null
    });
    
    await newDownload.save();
    res.status(201).json(newDownload);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// Get all Department
router.get("/", async (req, res) => {
  try {
    const Department = await Department.find().sort({ createdAt: -1 });
    res.json(Department);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Department" });
  }
});

// Delete a download
router.delete("/:id", async (req, res) => {
  try {
    const download = await Department.findById(req.params.id);
    if (!download) return res.status(404).json({ error: "File not found" });

    // Delete file from storage (Cloudinary or local)
    await handleFileDeletion(download.fileUrl, download.cloudinaryPublicId);

    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: "Failed to delete file" });
  }
});

export default router;
