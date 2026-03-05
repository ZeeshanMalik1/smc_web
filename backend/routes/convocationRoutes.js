import express from "express";
import Convocation from "../models/Convocation.js";
import { uploadConvocation } from "../config/cloudinary.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Prepare multer configuration to handle multiple specific fields
// We expect a main `picture`, and up to 5 distinction attachments (`distinction_year1`, etc)
const cpUpload = uploadConvocation.fields([
    { name: "picture", maxCount: 1 },
    { name: "distinction_year1", maxCount: 1 },
    { name: "distinction_year2", maxCount: 1 },
    { name: "distinction_year3", maxCount: 1 },
    { name: "distinction_year4", maxCount: 1 },
    { name: "distinction_year5", maxCount: 1 },
]);

router.post("/", cpUpload, async (req, res) => {
    try {
        const {
            name,
            fatherName,
            whatsapp,
            email,
            collegeId,
            uhsReg,
            pmdReg,
            academicSession,
            passingYear,
            distinction,
            positionHolder,
            department,
            currentPosition,
            attendConvocation,
        } = req.body;

        // Build the positions data safely by parsing if it came as a JSON string,
        // or manually reconstructing from fields. Let's assume frontend sends flat fields for simplicity.
        const positions = {
            year1: req.body.position_year1 || "",
            year2: req.body.position_year2 || "",
            year3: req.body.position_year3 || "",
            year4: req.body.position_year4 || "",
            year5: req.body.position_year5 || "",
        };

        // Extract file paths from req.files provided by multer-cloudinary or locals
        let pictureUrl = "";
        if (req.files && req.files["picture"] && req.files["picture"][0]) {
            pictureUrl = req.files["picture"][0].path || `/uploads/convocations/${req.files["picture"][0].filename}`;
        }

        const distinctionFiles = {
            year1: req.files && req.files["distinction_year1"] && req.files["distinction_year1"][0] ? req.files["distinction_year1"][0].path || `/uploads/convocations/${req.files["distinction_year1"][0].filename}` : "",
            year2: req.files && req.files["distinction_year2"] && req.files["distinction_year2"][0] ? req.files["distinction_year2"][0].path || `/uploads/convocations/${req.files["distinction_year2"][0].filename}` : "",
            year3: req.files && req.files["distinction_year3"] && req.files["distinction_year3"][0] ? req.files["distinction_year3"][0].path || `/uploads/convocations/${req.files["distinction_year3"][0].filename}` : "",
            year4: req.files && req.files["distinction_year4"] && req.files["distinction_year4"][0] ? req.files["distinction_year4"][0].path || `/uploads/convocations/${req.files["distinction_year4"][0].filename}` : "",
            year5: req.files && req.files["distinction_year5"] && req.files["distinction_year5"][0] ? req.files["distinction_year5"][0].path || `/uploads/convocations/${req.files["distinction_year5"][0].filename}` : "",
        };

        const newConvocation = new Convocation({
            name,
            fatherName,
            whatsapp,
            email,
            collegeId,
            uhsReg,
            pmdReg,
            academicSession,
            passingYear,
            distinction,
            distinctionFiles,
            positionHolder,
            positions,
            department,
            currentPosition,
            attendConvocation,
            picture: pictureUrl,
        });

        await newConvocation.save();

        // Send confirmation email asynchronously
        if (email) {
            try {
                // Configure transporter (using Gmail/SMTP as an example, ideally use env vars)
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        // User should set up these env variables for the email to actually work
                        user: process.env.EMAIL_USER || "your-email@gmail.com",
                        pass: process.env.EMAIL_PASS || "your-app-password",
                    },
                });

                const mailOptions = {
                    from: process.env.EMAIL_USER || "your-email@gmail.com",
                    to: email,
                    subject: "Convocation Registration Confirmation - SMC",
                    html: `
                        <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                            <div style="background-color: #8b0000; color: white; padding: 20px; text-align: center;">
                                <h1 style="margin: 0; font-size: 24px;">Registration Confirmed</h1>
                            </div>
                            <div style="padding: 30px; background-color: #f9f9f9;">
                                <p style="font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
                                <p style="font-size: 16px; color: #333; line-height: 1.5;">
                                    Your registration for the SMC Convocation has been successfully received.
                                </p>
                                <div style="background-color: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 20px 0;">
                                    <h3 style="margin-top: 0; color: #8b0000; border-bottom: 2px solid #8b0000; padding-bottom: 10px;">Registration Details</h3>
                                    <p style="margin: 5px 0;"><strong>Attendance Name:</strong> ${name}</p>
                                    <p style="margin: 5px 0;"><strong>College ID:</strong> ${collegeId || "N/A"}</p>
                                    <p style="margin: 5px 0;"><strong>Department:</strong> ${department || "N/A"}</p>
                                    <p style="margin: 5px 0;"><strong>Will Attend:</strong> ${attendConvocation}</p>
                                </div>
                                <p style="font-size: 14px; color: #666; margin-top: 30px;">
                                    If you have any questions, please contact the administration.
                                </p>
                                <p style="font-size: 14px; color: #666;">
                                    Best Regards,<br>
                                    <strong>SMC Administration</strong>
                                </p>
                            </div>
                        </div>
                    `,
                };

                // Don't wait for email to send to return response
                transporter.sendMail(mailOptions).catch(err => {
                    console.error("Failed to send confirmation email:", err);
                });
            } catch (err) {
                console.error("Mail setup error:", err);
            }
        }

        res.status(201).json({ message: "Convocation registration submitted successfully", record: newConvocation });
    } catch (error) {
        console.error("Error submitting convocation form:", error);
        res.status(500).json({ error: "An error occurred while submitting the form. Please try again." });
    }
});

// Endpoint to get all registrations (likely for admin dashboard later)
router.get("/", async (req, res) => {
    try {
        const records = await Convocation.find().sort({ createdAt: -1 });
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch records" });
    }
});

// Endpoint to delete a registration by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedRecord = await Convocation.findByIdAndDelete(req.params.id);
        if (!deletedRecord) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete record" });
    }
});

export default router;
