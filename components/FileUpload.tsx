"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Cloud, DropletsIcon as DropboxIcon, HardDriveIcon as Drive } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"

interface FileUploadProps {
  maxSize?: number // in MB
  onUpload?: (files: File[]) => void
  className?: string
}

export function FileUpload({ maxSize = 100, onUpload, className }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    setUploadProgress(0)
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: maxSize * 1024 * 1024, // Convert MB to bytes
  })

  return (
    <div className={`${className} rounded-lg overflow-hidden shadow-md`}>
      <div className="bg-gradient-to-r from-[hsl(var(--dark-red))] to-[hsl(var(--light-red))] p-4 flex items-center justify-between">
        <Button variant="secondary" className="bg-white text-[hsl(var(--dark-red))] hover:bg-gray-100">
          Choose Files
        </Button>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
            <DropboxIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
            <Drive className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
            <Cloud className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed p-8
          transition-colors duration-200 ease-in-out
          flex flex-col items-center justify-center gap-4
          min-h-[200px]
          ${
            isDragActive
              ? "border-[hsl(var(--dark-red))] bg-[hsl(var(--light-red))]/10"
              : "border-muted bg-white dark:bg-gray-800"
          }
        `}
      >
        <input {...getInputProps()} />
        <AnimatePresence>
          {files.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full"
            >
              <div className="mb-2 text-sm font-medium text-[hsl(var(--dark-red))]">
                Uploading {files.length} file{files.length > 1 ? "s" : ""}...
              </div>
              <Progress value={uploadProgress} className="h-2 bg-[hsl(var(--light-red))]" />
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              <p className="text-muted-foreground mb-2">Drop files here. {maxSize} MB maximum file size</p>
              <p className="text-sm">
                or{" "}
                <Button variant="link" className="p-0 h-auto font-semibold text-[hsl(var(--dark-red))]">
                  Sign Up
                </Button>{" "}
                for larger uploads
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

