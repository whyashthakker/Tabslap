"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import defaultProfileImage from "@/public/pf.png";
import { usePostHog } from "posthog-js/react";


const TiktokComment = () => {
  const [username, setUsername] = useState("Reply to @username's comment");
  const [note, setNote] = useState("Change Text & see the Magic! 😀");
  const [profileImage, setProfileImage] = useState<string | null>(
    defaultProfileImage.src
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const posthog = usePostHog();

  useEffect(() => {
    renderCommentDemo();
  }, [username, note, profileImage]);

  const handleDownload = () => {
    const canvasDataURL = getCanvasDataURL();
    if (canvasDataURL && downloadLinkRef.current) {
      downloadLinkRef.current.href = canvasDataURL;
      downloadLinkRef.current.click();
    }
    posthog.capture("Downloaded Tiktok Comment");
  };

  const handleProfileImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          setProfileImage(result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(defaultProfileImage.src);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(`Reply to @${newUsername}'s comment`);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const getCanvasDataURL = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      return canvas.toDataURL("image/png");
    }
    return null;
  };

  const renderCommentDemo = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Set the comment box position
        const boxWidth = 300;
        const boxHeight = 70;
        const x = 50;
        const y = canvas.height / 2 - boxHeight / 2;
  
        // Draw the comment box background
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, boxWidth, boxHeight);
  
        // Draw the comment box border
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, boxWidth, boxHeight);
  
        // Draw the profile image inside the comment box
        if (profileImage) {
          const img = document.createElement("img");
          img.onload = () => {
            const size = 30;
            const circleX = x + 23;
            const circleY = y + boxHeight / 2;
            ctx.save();
            ctx.beginPath();
            ctx.arc(circleX, circleY, size / 2, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(img, circleX - size / 2, circleY - size / 2, size, size);
            ctx.restore();
          };
          img.src = profileImage;
        }
  
        // Set the font and color for the username
        ctx.font = "10px Arial";
        ctx.fillStyle = "gray";
  
        // Truncate the username if it exceeds the character limit
        const maxUsernameLength = 30;
        const truncatedUsername =
          username.length > maxUsernameLength
            ? username.slice(0, maxUsernameLength) + "..."
            : username;
  
        // Draw the username next to the profile image
        ctx.fillText(truncatedUsername, x + 50, y + 20);
  
        // Set the font and color for the note text
        ctx.font = "15px Arial";
        ctx.fillStyle = "black";
  
        // Wrap the note text if it exceeds the box width
        const words = note.split(" ");
        let line = "";
        let lineHeight = y + 40; // Start the note text below the username
        const maxLineWidth = boxWidth - 60; // 80% of the box width
        for (let i = 0; i < words.length; i++) {
          const testLine = line + words[i] + " ";
          const metrics = ctx.measureText(testLine);
          const testWidth = metrics.width;
          if (testWidth > maxLineWidth && i > 0) {
            ctx.fillText(line, x + 50, lineHeight);
            line = words[i] + " ";
            lineHeight += 15;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, x + 50, lineHeight);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <Card>
        <CardHeader>
          <h2 className="text-2xl text-center font-bold">Free TikTok Comment Generator</h2>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <div className="w-1/2 pr-4">
                <Input
                    type="text"
                    value={username.replace("Reply to @", "").replace("'s comment", "")}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                />
              <Textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Comment"
                className="mt-2"
              />
              <Input
                type="file"
                accept="image/*"
                onChange={handleProfileImageUpload}
                className="mt-2"
              />
            <Button asChild className="mt-2" onClick={handleDownload}>
                <div className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Download Comment
                </div>
              </Button>
              <a ref={downloadLinkRef} download="comment.png" style={{ display: "none" }} />
            </div>
            <div className="w-1/2 relative">
              <Image src="/image-tiktok.png" alt="Tiktok Image" width={500} height={500} />
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TiktokComment;