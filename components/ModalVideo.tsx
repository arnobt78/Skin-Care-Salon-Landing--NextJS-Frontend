/**
 * ModalVideo Component
 *
 * Video modal that opens when user clicks the play button
 * Uses shadcn/ui Dialog component (built on Radix UI)
 * Integrates ReactPlayer for YouTube video playback
 *
 * Features:
 * - Click play button to open modal
 * - Video plays in modal overlay
 * - Modal can be closed by clicking outside or close button
 */
import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

const ModalVideo = () => {
  return (
    <Dialog>
      {/* 
        DialogTrigger with asChild prop
        asChild merges props with child element instead of rendering a button
        This allows custom styling of the trigger element
        Reference: https://reffect.co.jp/react/shadcn-react#Slot
      */}
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          {/* Play button with circular background and shadow */}
          <button className="relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent">
            <Image src="/assets/home/play.svg" width={36} height={36} alt="" />
          </button>
          <span className="text-lg font-primary">Watch Video</span>
        </div>
      </DialogTrigger>
      {/* 
        DialogContent - the modal container that appears when dialog is open
        Contains the video player
      */}
      <DialogContent>
        {/* 
          ReactPlayer component for video playback
          Supports YouTube, Vimeo, and many other video providers
          muted prop starts video without sound
          width/height 100% fills the dialog container
        */}
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=Er5a7snyQKM"
          muted
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
