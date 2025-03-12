import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { createTransport } from "nodemailer";
import { contactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  const transporter = createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactMessageSchema.parse(req.body);
      
      // Store message
      const message = await storage.createContactMessage(data);

      // Send email
      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
          subject: `New Contact Form Message from ${data.name}`,
          text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        });
      } catch (error) {
        console.error("Failed to send email:", error);
        return res.status(500).json({ message: "Failed to send email" });
      }

      res.json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
